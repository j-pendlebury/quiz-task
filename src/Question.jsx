import Answer from "./Answer";
import Results from "./Results";
import { useState } from "react";

const Question = ({ questions, setQuestionNo, questionNo }) => {
  const { title, answers } = questions[questionNo];
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const clickedAnswer = (event) => {
    saveAnswers(event);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (questionNo === questions.length - 1) return setQuizFinished(true);
    setQuestionNo(questionNo + 1);
  };

  const saveAnswers = (event) => {
    setUserAnswers([...userAnswers, event.target.textContent]);
  };

  return quizFinished ? (
    <Results userAnswers={userAnswers} />
  ) : (
    <div className="questionBlock">
      <h1 className="question">{title}</h1>
      <div className="answerBlock">
        {answers.map((answer, key) => {
          return (
            <Answer answer={answer} key={key} clickedAnswer={clickedAnswer} />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
