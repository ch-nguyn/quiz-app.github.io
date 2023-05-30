import { useState } from "react";
import { Questions } from "../InGame/Questions";
import { InGame, correctAnswers } from "../InGame/InGame";
import { StartGame } from "../StartGame";

export const Review = (props: any) => {
  let [restart, setRestart] = useState<boolean>(false);
  let [startGame, setStartGame] = useState<boolean>(false);

  let [reset, setReset] = useState(0);
  let [currentQ, setCurrentQ] = useState<number>(0);
  const prevQuestion = () => {
    if (currentQ !== 0) {
      setCurrentQ(currentQ - 1);
    }
  };
  const nextQuestion = () => {
    if (currentQ < props.questions.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  if (restart) {
    return (
      <div>
        {startGame ? (
          <InGame />
        ) : (
          <StartGame
            onClick={() => {
              setStartGame(true);
            }}
          />
        )}
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="qst-btn">
          <button
            className={!currentQ ? "prev-btn disable-btn" : "prev-btn"}
            onClick={prevQuestion}
          >
            Previous
          </button>
          <button
            className={
              currentQ === props.questions.length - 1
                ? "next-btn green-btn disable-btn"
                : "next-btn green-btn"
            }
            onClick={nextQuestion}
          >
            Next
          </button>
          <button
            className="restart-btn text-white yellow-btn"
            onClick={() => {
              props.questions.map((question: any) => {
                question.check_answer = NaN;
              });
              setRestart(true);
            }}
          >
            Restart
          </button>
        </div>
        <div className="quiz-container">
          <div className="question-container">
            <p className="question-heading">
              Question <span>{props.questions[currentQ].id}</span>/
              {props.questions.length}
            </p>
            <p className="question-content">
              {props.questions[currentQ].question_content}
            </p>
          </div>
          <div className="answers-container">
            {props.questions[currentQ].answers.map(
              (answer: any, index: number) => {
                if (index === correctAnswers[currentQ]) {
                  return (
                    <div className="answer answer-correct noHover">
                      {index + 1}) {answer.answer_content}
                    </div>
                  );
                } else {
                  if (props.questions[currentQ].check_answer === index) {
                    return (
                      <div
                        className={
                          props.questions[currentQ].check_answer ===
                          correctAnswers[currentQ]
                            ? "answer answer-correct noHover"
                            : "answer answer-choose noHover"
                        }
                      >
                        {index + 1}) {answer.answer_content}
                      </div>
                    );
                  } else {
                    return (
                      <div className="answer noHover">
                        {index + 1}) {answer.answer_content}
                      </div>
                    );
                  }
                }
              }
            )}
          </div>
          <div className="time-out text-bold">End!</div>
        </div>
      </div>
    );
  }
};
