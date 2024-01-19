# React + TypeScript + Vite

### services

- 데이터 패칭을 위해 services/fetchQuestions.tsx 에서 함수 정의

### components

- AppButton, QuestionCard, Spinner 컴포넌트를 이용하여 props를 주면 컴포넌트단에서 스타일링, 데이터를 보여준다.

### constans

- 상수들의 집합이라고 보면 되는데 enum으로 상수 집합 정의. 총 퀴즈개수, 퀴즈난이도를 정의하였다.

### App.tsx

- 모든 상태관리를 App.tsx 에서 하기로 정의하였다. 원래는 컴포넌트 상태관리 또한 분할해야 한다.
- next.js 와 react 의 비교를 위하여 진행하는 것이므로 한곳에 때려박았다.

### 응답속도

- 로드하는데 149ms,
- DOMContentLoad 130ms
- resource 2.6MB
