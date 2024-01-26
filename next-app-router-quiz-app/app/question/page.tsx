import Question from '@/components/Question';
import { getQuestion } from '@/utils/functions';
import { IQuestion } from '@/utils/types';

const QuestionPage = () => {
  const questions = getQuestion();
  return (
    <div className={'flex flex-col space-y-4 p-4 md:space-y-8 lg:p-8'}>
      {questions.map((question: IQuestion) => (
        <Question
          withId={false}
          checkEnabled={true}
          key={question.id}
          question={question}
        />
      ))}
    </div>
  );
};

export default QuestionPage;
