import "./App.css";
import Question from "./Question";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [questionNo, setQuestionNo] = useState(0);

  return (
    <div className="App">
      <Question
        questions={data.questions}
        setQuestionNo={setQuestionNo}
        questionNo={questionNo}
      />
    </div>
  );
}

export default App;
