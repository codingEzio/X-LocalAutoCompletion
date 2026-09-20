# Changelog

## English

### 0.4.1 — 2026-09-20

- Replace the restricted-use Google Web Trillion Word Corpus derivative with common and exam
  vocabulary from the reviewed MIT-licensed ECDICT snapshot.

### 0.4.0 — 2026-09-15

- Rename the product to X-LocalAutoCompletion.
- Complete from the whole current file, not a nearby line window.
- Always include ranked offline English: common words first, then exam-only extras.
- Remove workspace indexing, learned choices, pinned words, completion-surface switching, CJK locale
  settings, and the experimental native benchmark backend.

### 0.3.2 — 2026-09-07

- Bound document reads before copying text and scan trailing identifiers without rescanning long
  lines.
- Keep inline suggestions compatible with typed casing and the selected completion menu item.

### 0.3.1 — 2026-09-07

- Keep the 250 most recently accepted records so a full history can still learn new choices.

### 0.3.0 — 2026-09-07

- Add opt-in offline English vocabulary with IELTS/TOEFL/GRE-tagged words.

### 0.2.1 — 2026-09-07

- Fix Command Palette contributions for the four user commands.

### 0.2.0 — 2026-09-03

- Workspace-local learning, explicit workspace indexing, and native completion-surface choice.

### 0.1.0 — 2026-09-03

- Initial nearby-document word completion.

## 简体中文

### 0.4.1 — 2026-09-20

- 移除限制再分发的 Google Web Trillion Word Corpus 衍生词表，常用词和考试词统一改用已审查、 MIT
  授权的 ECDICT 快照。
- ECDICT 提取流程可重复执行，并验证源文件校验值。

### 0.4.0 — 2026-09-15

- 产品更名为 X-LocalAutoCompletion。
- 使用当前文件全文，而不是附近行窗口。
- 始终启用按频率排序的离线英文词库。
- 移除工作区索引、学习缓存、固定词、补全界面切换、CJK locale，以及实验性 native 基准后端。
