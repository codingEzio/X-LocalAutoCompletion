# X-LocalAutoCompletion

Private, instant word completion for Cursor / VS Code. No model, account, API key, or network.

Type `ar` in a file that contains `archive`, or type `th` anywhere: it can offer `archive` or `the`.
That is the whole product.

English · [简体中文](#简体中文)

## English

### What it does

- Completes words that already appear **anywhere in the current file**.
- Always also completes from a bundled offline English list: 10,000 contemporary-frequency ECDICT
  words plus extra IELTS/TOEFL/GRE headwords. File matches rank first; English fills the rest.
- Shows ghost text while typing. `Ctrl+Space` lists up to eight ranked choices.

### What it does not do

- No sentence, next-line, or semantic code completion.
- No workspace crawler, learning cache, pinned words, or CJK-specific mode.
- No cloud request, telemetry, or language model.

### Install

```sh
deno task check
deno task package
cursor --install-extension dist/x-local-auto-completion-0.4.1.vsix
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
unzip -t dist/x-local-auto-completion-0.4.1.vsix
```

[Vocabulary sources](data/SOURCE.md).

## 简体中文

当前文件里出现过的词，加上内置离线英文词，用来补全当前正在输入的词。没有
AI、没有网络、没有跨文件爬取。

安装后执行 **Developer: Reload Window**，并保持 `editor.inlineSuggest.enabled` 开启。
