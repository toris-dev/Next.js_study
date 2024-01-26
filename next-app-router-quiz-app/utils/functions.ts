import { IQuestion, IState } from './types';

// json-server 띄우기 귀찮...
export const getQuestion = (): IQuestion[] => {
  return require('../data/question.json');
};

export const getState = (): IState[] => {
  return require('../data/states.json');
};

export const getQuizQuestions = (state: number): IQuestion[] => {
  const questions = getQuestion();
  const states = getState()[state - 1].questions;
  return [...questions.slice(0, 30), ...states.slice(0, 3)];
};
