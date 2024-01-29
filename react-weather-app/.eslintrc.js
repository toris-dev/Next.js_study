module.exports = {
  // broswer, node 설정을 하지 않을 경우 console, require 같은 사전 정의된 전역변수 환경에 있는 정적 메서드를 인식할 수 없어 에러 발생.
  env: {
    node: true,
    browser: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',

  // prettier 추가
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // prettier 삭제
    // 'prettier'

    // plugin:prettier/recommended 추가
    'plugin:prettier/recommended',
  ],

  rules: {
    //prettier/prettier rule 추가
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    semi: 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
