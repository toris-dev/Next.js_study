export interface IQuestion {
  id: number;
  text: string;
  answer: number;
  options: IOption[];
  img: boolean;
  type: QuestionTypes;
}

export enum QuestionTypes {
  CHECK_BOX,
  RADIO_BUTTON,
}

export interface IOption {
  id: number;
  text: string;
}

export interface IState {
  id: number;
  title: string;
  questions: IQuestion[];
}
