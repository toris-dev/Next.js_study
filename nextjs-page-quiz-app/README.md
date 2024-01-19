This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### swr

- SWR이란 “Stale-While-Revalidate”라는 HTTP 캐시 무효화 전략에서 유래된 데이터 페칭을 위한 리액트 라이브러리이다.
- SWR의 기본적인 작동은 우선 캐시(stale)에서 데이터를 불러오고, 검증을 위한 요청(revalidate)을 보내고, 마침내 최신 데이터로 업데이트하는 과정을 거친다.
- 또한 SWR을 사용하는 컴포넌트들은 지속적이고 자동적으로 데이터 업데이트가 이루어짐으로써 항상 최신 상태를 유지할 수 있게 된다.
- 비슷한 라이브러리는 react-query
- 페이지네이션, 캐싱, 요청을 처리하는 동안에 로딩을 바로 가져올 수 있고, error 또한 쉽게 볼 수 있다.
