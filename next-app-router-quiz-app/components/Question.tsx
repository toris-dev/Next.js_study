'use client';
import { IQuestion } from '@/utils/types';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { animated, useTransition } from '@react-spring/web';
import { useState } from 'react';

interface Props {
  question: IQuestion;
  withId: boolean;
  checkEnabled: boolean;
  getAnswer?: (answer: boolean) => void;
}

const Question: React.FC<Props> = ({
  question,
  withId,
  checkEnabled,
  getAnswer,
}) => {
  const [answer, setAnswer] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const transitions = useTransition(isAnswered, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 40 },
    leave: { opacity: 0, height: 0 },
    config: {
      duration: 200,
    },
  });
  return (
    <div
      className={`rounded-xl border-4 border-t-8 bg-slate-100 p-4 shadow ${
        isAnswered
          ? isTrue
            ? 'border-green-600'
            : 'border-red-600'
          : 'border-transparent'
      }`}
    >
      <div className="mb-4 text-xl text-slate-500">
        {(withId ? question.id + ') ' : '') + question.text}
      </div>

      {question.options.map((option) => (
        <label
          key={option.id}
          onClick={() => {
            setAnswer(option.id);
            setIsAnswered(false);
            if (getAnswer) {
              getAnswer(question.answer === answer);
            }
          }}
          htmlFor={`option_${question.id}_${option.id}`}
          className={`my-2 flex cursor-pointer items-center justify-start
           space-x-4 rounded-lg border-2 border-transparent bg-white px-4 py-2 text-gray-500 shadow-sm
           duration-200 hover:border-blue-600`}
        >
          {/** 조건부 렌더링 */}
          {isAnswered &&
            (isTrue ? (
              option.id === question.answer ? (
                <CheckCircleIcon className="size-6 stroke-green-600" />
              ) : (
                <></>
              )
            ) : option.id === question.answer ? (
              <CheckCircleIcon className="size-6 stroke-green-600" />
            ) : (
              <XCircleIcon className="size-6 stroke-red-600" />
            ))}
          <input
            id={`option_${question.id}_${option.id}`}
            type={'radio'}
            name={`question_${question.id}`}
          />
          <span className="w-full">{option.text}</span>
        </label>
      ))}

      {checkEnabled &&
        transitions(
          (styles, item) =>
            answer > 0 &&
            !item && (
              <animated.div style={{ overflow: 'hidden', ...styles }}>
                <div
                  onClick={() => {
                    setIsAnswered(true);
                    setIsTrue(question.answer === answer);
                  }}
                  className={`cursor-pointer rounded bg-blue-600 p-2 text-center text-slate-50
             shadow duration-200 hover:bg-blue-500`}
                >
                  답변을 확인하세요.
                </div>
              </animated.div>
            ),
        )}
    </div>
  );
};

export default Question;
