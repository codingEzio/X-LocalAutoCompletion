# X-LocalAutoCompletion

在目前檔案與內建離線英文詞彙中，快速、私密地補全單字。僅適用於 Visual Studio
Code；不需要模型、帳號、API 金鑰或網路連線。

例如，在含有 `archive` 的檔案中輸入 `ar`，或在任何位置輸入 `th`，就可能看到 `archive` 或
`the`。這就是本產品的全部功能。

## 功能

- 從**目前檔案的任何位置**找出已出現的單字並提供補全。
- 一律也會使用內建離線英文詞表：10,000 個依當代詞頻整理的 ECDICT 詞彙，另含 IELTS、TOEFL、GRE
  考試詞條。檔案中的匹配結果優先排序，其餘位置由英文詞表補足。
- 輸入時顯示行內建議文字。按 VS Code 預設的 `Ctrl+Space` 快捷鍵（僅在 macOS
  未保留此快捷鍵時適用）觸發 **Trigger Suggest**，可列出最多八個依排名排列的候選項。

## 不提供的功能

- 不提供句子、下一行或語意程式碼補全。
- 不會掃描工作區，也沒有學習快取、固定詞彙或 CJK 專用模式。
- 不會連線至雲端，也沒有遙測或語言模型。

## 安裝

```sh
deno task check
deno task package
code --install-extension dist/x-local-auto-completion-0.5.0.vsix
```

安裝或更新 VSIX 後，請執行 **Developer: Reload Window**。`editor.inlineSuggest.enabled`
必須保持開啟。

## 設定

```jsonc
{
  "localAutoCompletion.enabled": true,
  "localAutoCompletion.minimumPrefixLength": 2
}
```

## 開發

```sh
deno task check
deno task package
unzip -t dist/x-local-auto-completion-0.5.0.vsix
```

[詞彙來源](../data/SOURCE.md)。
