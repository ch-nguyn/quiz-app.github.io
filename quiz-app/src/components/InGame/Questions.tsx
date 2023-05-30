import { useState } from "react";

export const Questions = (props: any) => {
  let [reset, setReset] = useState(0);
  return (
    <div className="quiz-container">
      <div className="question-container">
        <p className="question-heading">
          Question <span>{props.questions[props.currentQ].id}</span>/
          {props.questions.length}
        </p>
        <p className="question-content">
          {props.questions[props.currentQ].question_content}
        </p>
      </div>
      <div className="answers-container">
        {props.questions[props.currentQ].answers.map(
          (answer: any, index: number) => {
            if (props.questions[props.currentQ].check_answer === index) {
              return (
                <div
                  className="answer answer-active"
                  onClick={(event: any) => {
                    props.questions[props.currentQ].check_answer = index;
                    setReset(reset + 1);
                  }}
                >
                  {index + 1}) {answer.answer_content}
                </div>
              );
            } else {
              return (
                <div
                  className="answer"
                  onClick={(event: any) => {
                    props.questions[props.currentQ].check_answer = index;
                    setReset(reset + 1);
                  }}
                >
                  {index + 1}) {answer.answer_content}
                </div>
              );
            }
          }
        )}
      </div>
    </div>
  );
};
