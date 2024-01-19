import { TQuiz, TSavedAnswer } from "@/types/quiz";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const Result = () => {
  const getAnswers =
    (typeof window !== "undefined" && localStorage.getItem("quiz")) ||
    JSON.stringify({});
  const answers: TSavedAnswer = JSON.parse(getAnswers);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`/api/quiz`, fetcher);
  if (error) return <div>에러가 났습니다! </div>;
  if (!data) return <div>Loading...</div>;

  let correctAnswers = 0;
  console.log(data);
  if (data) {
    data.map((quiz: TQuiz) => {
      if (quiz.answer === answers[quiz.id]) {
        correctAnswers += 1;
      }
    });
  }
  return (
    <>
      <div>
        <Link href="/">다시 시작하기</Link>
      </div>
      <h2>
        {correctAnswers} 개의 문제를 맞췄습니다. <br />
        {correctAnswers > (data.length / 100) * 70 ? "Passed" : "Failed"}
      </h2>
      <br />
      {data.map((quiz: TQuiz) => (
        <div key={quiz.id}>
          <div>
            <p>{quiz.question}</p>
          </div>
          <ul>
            {quiz.options.map((option: string, i: number) => (
              <li key={i}>
                {option === quiz.answer ? ( // 정답일때
                  quiz.answer === answers[quiz.id] ? (
                    <span>{option} &nbsp; ✅</span>
                  ) : (
                    <span>{option}</span>
                  )
                ) : answers[quiz.id] === option ? ( // 오답일때
                  <>
                    <span>{option} &nbsp; ❌</span>
                  </>
                ) : (
                  <span>{option}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Result;
