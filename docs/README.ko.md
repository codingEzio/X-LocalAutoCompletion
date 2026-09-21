# X-LocalAutoCompletion

Visual Studio Code 전용의 빠르고 개인정보 보호에 초점을 둔 단어 완성 기능입니다. 모델, 계정, API 키
또는 네트워크를 사용하지 않습니다.

`archive`가 들어 있는 파일에서 `ar`를 입력하거나 어디서든 `th`를 입력하면 `archive` 또는 `the`를
제안할 수 있습니다. 제품 기능은 여기까지입니다.

## 기능

- 현재 파일 어디에든 이미 있는 단어를 완성 후보로 제시합니다.
- 항상 함께 제공되는 오프라인 영어 어휘 목록도 사용합니다. 현대 영어 사용 빈도를 반영한 ECDICT 단어
  10,000개와 IELTS/TOEFL/GRE 추가 표제어로 구성됩니다. 파일 내 일치 항목을 우선하고 나머지는 영어
  어휘로 채웁니다.
- 입력하는 동안 고스트 텍스트를 표시합니다. VS Code 기본 **Trigger Suggest** 단축키인 `Ctrl+Space`를
  사용하면 순위가 매겨진 후보를 최대 8개 표시합니다. macOS가 이 키 조합을 예약하지 않은 경우에만 이
  단축키를 사용할 수 있습니다.

## 지원하지 않는 기능

- 문장, 다음 줄 또는 의미 기반 코드 완성을 제공하지 않습니다.
- 워크스페이스를 탐색하지 않으며, 학습 캐시, 고정 단어 또는 CJK 전용 모드도 없습니다.
- 클라우드 요청, 텔레메트리 또는 언어 모델을 사용하지 않습니다.

## 설치

```sh
deno task check
deno task package
code --install-extension dist/x-local-auto-completion-0.5.2.vsix
```

업데이트된 VSIX를 설치한 뒤 **Developer: Reload Window**를 실행하세요.
`editor.inlineSuggest.enabled`는 계속 켜 두어야 합니다.

## 설정

```jsonc
{
  "localAutoCompletion.enabled": true,
  "localAutoCompletion.minimumPrefixLength": 2
}
```

## 개발

```sh
deno task check
deno task package
unzip -t dist/x-local-auto-completion-0.5.2.vsix
```

[어휘 출처](../data/SOURCE.md).
