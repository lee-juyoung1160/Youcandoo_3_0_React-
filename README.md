# 유캔두 홈페이지

- 첫 작성 2021.08.23

- IOS 이슈 : osCallbackHandler.postMessage 호출 후 callback 시 페이지 내부 함수를 호출하지 못하는 문제가 있음.
            해당 페이지 (gift, qna, referral).
            페이지 로드 이후 callback을 하는 방식을 시도해볼 여지가 있음.
            참고 > https://developer.apple.com/documentation/webkit/wknavigationdelegate/1455629-webview?language=objc

## 기술 스택

- Language: [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)

- Runtime: [nodejs](https://nodejs.org/ko/) 14 LTS

- UI Library: [React](https://ko.reactjs.org/)

- UI Framework: [Next](https://nextjs.org/)

- Style: [sass](https://sass-lang.com/)

- Linter: [eslint](https://eslint.org/)

- Formatter: [prettier](https://prettier.io/)

- Dependency Management: [yarn](https://classic.yarnpkg.com/en/)(권장) or npm(7.2 이상)

- Version Control: [git](https://git-scm.com/)

## 로컬에서 실행하기

Clone the project

```bash
  git clone aws code commit url
```

Go to the project directory

```bash
  cd 내려받은 프로젝트 폴더
```

Install dependencies

```bash
  yarn install or npm install
```

Start the server (개발모드)

```bash
  yarn dev or npm run dev
```
