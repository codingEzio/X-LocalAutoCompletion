# X-LocalAutoCompletion

Private, instant word completion for Visual Studio Code. No model, account, API key, or network.

Type `ar` in a file that contains `archive`, or type `th` anywhere: it can offer `archive` or `the`.
That is the whole product.

[繁體中文](docs/README.zh-TW.md) · [简体中文](docs/README.zh-CN.md) · [한국어](docs/README.ko.md) ·
[日本語](docs/README.ja.md) · [Español](docs/README.es.md) · [Русский](docs/README.ru.md) ·
[Українська](docs/README.uk.md)

### What it does

- Completes words that already appear **anywhere in the current file**.
- Always also completes from a bundled offline English list: 10,000 contemporary-frequency ECDICT
  words plus extra IELTS/TOEFL/GRE headwords. File matches rank first; English fills the rest.
- Shows ghost text while typing. **Trigger Suggest** lists up to eight ranked choices; its default
  VS Code shortcut is `Ctrl+Space` when macOS does not reserve that shortcut.

### What it does not do

- No sentence, next-line, or semantic code completion.
- No workspace crawler, learning cache, pinned words, or CJK-specific mode.
- No cloud request, telemetry, or language model.

### Install

[Install from Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=codingEzio.x-local-auto-completion) ·
[Open in Visual Studio Code](https://vscode.dev/redirect?url=vscode%3Aextension%2FcodingEzio.x-local-auto-completion)

```sh
deno task check
deno task package
code --install-extension dist/x-local-auto-completion-0.5.2.vsix
```

Use **Developer: Reload Window** after installing an updated VSIX. `editor.inlineSuggest.enabled`
must stay on.

### Configure

```jsonc
{
  "localAutoCompletion.enabled": true,
  "localAutoCompletion.minimumPrefixLength": 2
}
```

### Development

```sh
deno task check
deno task package
unzip -t dist/x-local-auto-completion-0.5.2.vsix
```

[Vocabulary sources](data/SOURCE.md) · [Changelog](CHANGELOG.md)
