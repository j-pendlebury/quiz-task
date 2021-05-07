import React from "react";

const Answer = ({ answer, clickedAnswer }) => {
  return (
    <p className="answer" onClick={(e) => clickedAnswer(e)}>
      {answer}
    </p>
  );
};

export default Answer;
