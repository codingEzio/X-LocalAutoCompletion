# X-LocalAutoCompletion

Visual Studio Code 専用の、高速でプライバシーに配慮した単語補完です。モデル、アカウント、API
キー、ネットワーク接続は必要ありません。

`archive` を含むファイルで `ar` と入力するか、どこでも `th` と入力すると、`archive` や `the`
を候補として表示します。機能はこれだけです。

## できること

- 現在のファイル内のどこかにすでにある単語を補完します。
- 同梱のオフライン英語語彙リストも常に候補に含めます。現代英語の使用頻度に基づく ECDICT の 10,000
  語と、IELTS/TOEFL/GRE
  の追加見出し語で構成されます。ファイル内で見つかった候補を優先し、残りを英語語彙で補います。
- 入力中にゴーストテキストを表示します。VS Code の既定の **Trigger Suggest** ショートカット
  `Ctrl+Space` で、順位付けされた候補を最大 8 件表示します。macOS がこのキーの組み合わせを予約
  していない場合にのみ、このショートカットを使用できます。

## できないこと

- 文、次の行、または意味に基づくコード補完は行いません。
- ワークスペースの走査、学習キャッシュ、単語の固定、CJK 専用モードには対応していません。
- クラウドへのリクエスト、テレメトリー、言語モデルは使用しません。

## インストール

```sh
deno task check
deno task package
code --install-extension dist/x-local-auto-completion-0.5.0.vsix
```

更新した VSIX のインストール後に **Developer: Reload Window**
を実行してください。`editor.inlineSuggest.enabled` は有効のままにしてください。

## 設定

```jsonc
{
  "localAutoCompletion.enabled": true,
  "localAutoCompletion.minimumPrefixLength": 2
}
```

## 開発

```sh
deno task check
deno task package
unzip -t dist/x-local-auto-completion-0.5.0.vsix
```

[語彙の出典](../data/SOURCE.md)
