# 보일러 플레이트

## Lint rules

- lint error 발생 시 푸시가 되지 않습니다.
- `console.log`, `var`, `==` 등을 사용했는지 한번 확인해보세요.

## 경로 별칭

`@` 사용으로 경로 별칭을 사용할 수 있습니다.

## Getting Started

### 1. `main` 브런치로 들어옵니다.

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b47f4ecf-4506-4916-828c-14bd524eae2d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-10-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.48.26.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221031T073717Z&X-Amz-Expires=86400&X-Amz-Signature=634d42104d665c4a397a32f7dacb68b154826667af095f1f8831644ed033b940&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-10-29%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25206.48.26.png%22&x-id=GetObject" />

### 2. 자신의 깃허브 아이디를 적고 `Create branch` 를 눌러서 자신의 브런치를 생성합니다.

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/35daeb70-59c7-4c76-b132-e8878d899af0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-10-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.48.42.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221031T073731Z&X-Amz-Expires=86400&X-Amz-Signature=674386edd14bae5b3733697d2db5d37d47f195908637c72f4e8c8b1fde412139&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-10-29%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25206.48.42.png%22&x-id=GetObject" />

### 3. 이 repository를 클론합니다.

`git clone ...`

### 4. 자신의 브런치로 이동합니다.

`git switch 자신의 깃허브 아이디`

만약 브런치가 없다고 하면 `git remote update` 명령어를 먼저 수행해주세요.

### 5. 자신의 브런치로 잘 이동을 하였다면 작업을 시작해주세요!

`npm install`

### 6. 작업을 완료하셨다면 main 브런치로 PR을 날려주세요.

- 자신의 브런치에서 main으로 보내는 것입니다.

- PR 제목: 본인 이름
