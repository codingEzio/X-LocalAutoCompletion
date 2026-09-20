const root = new URL("..", import.meta.url).pathname;
const packagePath = `${root}/package.json`;
const metadata = JSON.parse(await Deno.readTextFile(packagePath));
const categories = Array.isArray(metadata.categories)
  ? metadata.categories.map((category: string) => escapeXML(category)).join(",")
  : "Other";
const outputDirectory = `${root}/dist`;
const outputPath = `${outputDirectory}/${metadata.name}-${metadata.version}.vsix`;
const stagingDirectory = await Deno.makeTempDir({ prefix: "x-local-auto-completion-package-" });
const extensionDirectory = `${stagingDirectory}/extension`;

function escapeXML(value: string) {
  return value.replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function vsixManifest() {
  const name = escapeXML(metadata.name);
  const publisher = escapeXML(metadata.publisher);
  const version = escapeXML(metadata.version);
  const displayName = escapeXML(metadata.displayName);
  const description = escapeXML(metadata.description);
  return `<?xml version="1.0" encoding="utf-8"?>
<PackageManifest Version="2.0.0" xmlns="http://schemas.microsoft.com/developer/vsx-schema/2011">
  <Metadata>
    <Identity Language="en-US" Id="${name}" Version="${version}" Publisher="${publisher}" />
    <DisplayName>${displayName}</DisplayName>
    <Description xml:space="preserve">${description}</Description>
    <Categories>${categories}</Categories>
  </Metadata>
  <Installation>
    <InstallationTarget Id="Microsoft.VisualStudio.Code" />
  </Installation>
  <Dependencies />
  <Assets>
    <Asset Type="Microsoft.VisualStudio.Code.Manifest" Path="extension/package.json" Addressable="true" />
    <Asset Type="Microsoft.VisualStudio.Services.Content.Details" Path="extension/README.md" Addressable="true" />
    <Asset Type="Microsoft.VisualStudio.Services.Content.Changelog" Path="extension/CHANGELOG.md" Addressable="true" />
    <Asset Type="Microsoft.VisualStudio.Services.Content.License" Path="extension/LICENSE" Addressable="true" />
    <Asset Type="Microsoft.VisualStudio.Services.Icons.Default" Path="extension/assets/icon.png" Addressable="true" />
  </Assets>
</PackageManifest>`;
}

async function copySource(path: string, destination = extensionDirectory) {
  const result = await new Deno.Command("cp", {
    args: ["-R", `${root}/${path}`, destination],
  }).output();
  if (!result.success) {
    throw new Error(new TextDecoder().decode(result.stderr));
  }
}

const contentTypes = `<?xml version="1.0" encoding="utf-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="txt" ContentType="text/plain" />
  <Default Extension="json" ContentType="application/json" />
  <Default Extension="js" ContentType="application/javascript" />
  <Default Extension="md" ContentType="text/markdown" />
  <Default Extension="png" ContentType="image/png" />
  <Default Extension="svg" ContentType="image/svg+xml" />
  <Default Extension="xml" ContentType="text/xml" />
  <Default Extension="vsixmanifest" ContentType="text/xml" />
</Types>`;

try {
  await Deno.mkdir(extensionDirectory, { recursive: true });
  for (
    const path of [
      "package.json",
      "README.md",
      "CHANGELOG.md",
      "LICENSE",
      "assets",
      "extension.js",
      "src",
    ]
  ) {
    await copySource(path);
  }
  await Deno.mkdir(`${extensionDirectory}/data`);
  for (const path of ["data/ECDICT-LICENSE.txt", "data/SOURCE.md", "data/english.json"]) {
    await copySource(path, `${extensionDirectory}/data`);
  }
  await Deno.writeTextFile(`${stagingDirectory}/extension.vsixmanifest`, vsixManifest());
  await Deno.writeTextFile(`${stagingDirectory}/[Content_Types].xml`, contentTypes);
  await Deno.mkdir(outputDirectory, { recursive: true });
  await Deno.remove(outputPath).catch((error) => {
    if (!(error instanceof Deno.errors.NotFound)) {
      throw error;
    }
  });

  const packageResult = await new Deno.Command("zip", {
    args: [
      "-X",
      "-q",
      "-r",
      outputPath,
      "[Content_Types].xml",
      "extension.vsixmanifest",
      "extension",
    ],
    cwd: stagingDirectory,
  }).output();
  if (!packageResult.success) {
    throw new Error(new TextDecoder().decode(packageResult.stderr));
  }

  const verifyResult = await new Deno.Command("unzip", {
    args: ["-t", outputPath],
  }).output();
  if (!verifyResult.success) {
    throw new Error(new TextDecoder().decode(verifyResult.stderr));
  }

  console.log(outputPath);
} finally {
  await Deno.remove(stagingDirectory, { recursive: true });
}
