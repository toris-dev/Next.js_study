// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TQuiz, TQuizResponse } from "@/types/quiz";
import type { NextApiRequest, NextApiResponse } from "next";

// fetch 문 대신 array 객체로 대신사용
const questionAndAnswer: TQuiz[] = [
  { id: 1, question: "1+1 ?", options: ["1", "2", "3", "4"], answer: "2" },
  { id: 2, question: "2+2 ?", options: ["4", "5", "6", "7"], answer: "4" },
  { id: 3, question: "3+3 ?", options: ["6", "7", "8", "9"], answer: "6" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TQuizResponse>
) {
  try {
    const { page } = req.query as { page: string };
    if (!page) {
      res.send(questionAndAnswer);
    }

    let pageToNum = parseInt(page);

    const quiz = questionAndAnswer[pageToNum];
    const lastPage = questionAndAnswer.length - 1;
    const numOfQuestion = questionAndAnswer.length;

    if (pageToNum === 0) {
      res.send({ prev: false, next: true, page, quiz, total: numOfQuestion });
    } else if (pageToNum === lastPage) {
      res.send({ prev: true, next: false, page, quiz, total: numOfQuestion });
    } else {
      res.send({ prev: true, next: true, page, quiz, total: numOfQuestion });
    }
  } catch (error) {
    res.status(500);
  }
}
