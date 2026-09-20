import metadata from "../package.json" with { type: "json" };

Deno.test("the product is file plus English completion only", () => {
  const keys = Object.keys(metadata.contributes.configuration.properties).sort();
  if (
    JSON.stringify(keys) !==
      JSON.stringify(["localAutoCompletion.enabled", "localAutoCompletion.minimumPrefixLength"])
  ) {
    throw new Error(`unexpected settings: ${JSON.stringify(keys)}`);
  }
  if (metadata.contributes.commands) {
    throw new Error("this focused build should not contribute extra commands");
  }
  if (metadata.name !== "x-local-auto-completion") {
    throw new Error(`unexpected extension name: ${metadata.name}`);
  }
});
