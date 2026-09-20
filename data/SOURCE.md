# English Vocabulary Source

Runtime uses `english.json` rows of `[word, rank]`. Lower rank is more common. No network request
happens at runtime or during packaging.

## Included source

- Upstream: [skywind3000/ECDICT](https://github.com/skywind3000/ECDICT) revision
  [`bc015ed2e24a7abef49fc6dbbb7fe32c1dadaf8b`](https://github.com/skywind3000/ECDICT/tree/bc015ed2e24a7abef49fc6dbbb7fe32c1dadaf8b)
- Reviewed input: `ecdict.csv`, SHA-256
  `1a6947e04785db63613a92e14903cdae7954f7e84860b10e68e5c7cbb3f9c3cf`
- License: MIT, Copyright (c) 2025 Linwei, [ECDICT-LICENSE.txt](ECDICT-LICENSE.txt)
- Generated output: `english.json`, SHA-256
  `a367dcfe21561e74f34e9da2751eb5a0c9ff9afce80a2ad014714dbf746ff477`

The first 10,000 entries use ECDICT's contemporary-frequency (`frq`) order. Remaining
IELTS/TOEFL/GRE-tagged words follow as exam extras. Duplicate spellings are compared
case-insensitively, and runtime rows are sorted by spelling for prefix lookup.

Reproduce from the exact reviewed upstream CSV:

```sh
deno task vocabulary PATH_TO_ECDICT_CSV
```

## Excluded source

`first20hours/google-10000-english` is not shipped. Its own license says its data derives from the
Google Web Trillion Word Corpus distributed by the Linguistic Data Consortium, permits educational
and personal/research use, and does not recommend commercial use without an LDC license. The MIT
license on Peter Norvig's code does not relicense that corpus-derived data.
