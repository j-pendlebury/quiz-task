import React from "react";

const Results = ({ userAnswers }) => {
  // Normally I'd do something here with the answers, but I don't really know what
  // the very secret Buzzfeed calculations are :D
  // so instead I just displayed the list of answers

  return (
    <div className="user-answers">
      {userAnswers.map((userAnswer, key) => {
        return (
          <p key={key}>
            Question {key + 1}: {userAnswer}
          </p>
        );
      })}
    </div>
  );
};

export default Results;
