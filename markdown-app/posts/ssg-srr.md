---
title: "Two Forms of Pre-rendering"
date: "2020-01-01"
---

#### SSR(Server-Side-Rendering)

SSR은 유저가 페이지를 요청할 때마다 HTML 문서가 생성됩니다.
이러한 SSR을 사용하기 위해서는 매 요청마다 서버에 의해 호출되는 getServerSideProps 함수를 사용하는 것이 필요합니다.

어떤 상황에서 사용되나요?
항상 최신 상태를 유지해야하는 웹 페이지나, 분석 차트 등
사용자의 요청마다 동적으로 페이지를 생성해서 다른 내용을 보여주어야 하는 경우에 사용됩니다.

### CSR과의 차이

CSR과 SSR의 큰 차이에는 데이터를 불러오는 방식이 있습니다.
기존 React에서는 CSR 방식으로 데이터를 가져올 때 useEffect를 사용했다면,
Next.js에서는 getServerSideProps, getStaticProps, getStaticPaths 등을 활용하여 데이터를 불러옵니다.

getServerSideProps
Next.js는 pre-rendering 중 getServerSideProps 함수를 발견하면
컴포넌트 함수 호출 전에 getServerSideProps를 먼저 호출합니다.

API 통신을 통해 데이터를 받아온 후 컴포넌트에 props로 데이터를 전달합니다.
이 함수는 매 요청마다 호출되며 서버에서 실행됩니다.
