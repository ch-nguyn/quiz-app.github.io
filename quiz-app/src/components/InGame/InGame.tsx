import { useState } from "react";
import { Questions } from "./Questions";
import { EndGame } from "../EndGame/EndGame";
let questions = [
  {
    id: "1",
    question_content: "React is mainly used for building ___.",
    answers: [
      {
        answer_content: "Database",
        correct: false,
      },
      {
        answer_content: "User interface",
        correct: true,
      },
      {
        answer_content: "Design Platform",
        correct: false,
      },
    ],
    check_answer: NaN,
  },
  {
    id: "2",
    question_content: "The lifecycle methods are mainly used for ___.",
    answers: [
      {
        answer_content: "keeping track of event history",
        correct: false,
      },
      {
        answer_content: "enhancing components",
        correct: false,
      },
      {
        answer_content: "freeing up resources",
        correct: false,
      },
      {
        answer_content: "none of the above",
        correct: true,
      },
    ],
    check_answer: NaN,
  },
  {
    id: "3",
    question_content:
      "___ can be done while multiple elements need to be returned from a component.",
    answers: [
      {
        answer_content: "Abstraction",
        correct: false,
      },
      {
        answer_content: "Insulation",
        correct: false,
      },
      {
        answer_content: "Wrapping",
        correct: true,
      },
    ],
    check_answer: NaN,
  },
  {
    id: "4",
    question_content:
      "Which is the right way of accessing a function fetch() from an h1 element in JSX?",
    answers: [
      {
        answer_content: "<h1>{fetch()}</h1>",
        correct: true,
      },
      {
        answer_content: "<h1>${fetch()}</h1>",
        correct: false,
      },
      {
        answer_content: "<h1>{fetch}</h1>",
        correct: false,
      },
      {
        answer_content: "<h1>${fetch}</h1>",
        correct: false,
      },
    ],
    check_answer: NaN,
  },
  {
    id: "5",
    question_content:
      "Which of the following methods in a React Component should be overridden to stop the component from updating?",
    answers: [
      {
        answer_content: "willComponentUpdate",
        correct: false,
      },
      {
        answer_content: "shouldComponentUpdate",
        correct: true,
      },
    ],
    check_answer: NaN,
  },
];
export let correctAnswers: number[] = [];
questions.forEach((question: any, index: number) => {
  question.answers.forEach((answer: any, index: number) => {
    if (answer.correct) {
      correctAnswers.push(index);
    }
  });
});
let score = 0;
export const InGame = (props: any) => {
  let confirmMess = "Do you want to submit answers ?";
  let [currentQ, setCurrentQ] = useState<number>(0);
  let [endGame, setEndGame] = useState<boolean>(false);
  const prevQuestion = () => {
    if (currentQ !== 0) {
      setCurrentQ(currentQ - 1);
    }
  };
  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  if (endGame) {
    return <EndGame score={score} questions={questions} currentQ={currentQ} />;
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
              currentQ === questions.length - 1
                ? "next-btn green-btn disable-btn"
                : "next-btn green-btn"
            }
            onClick={nextQuestion}
          >
            Next
          </button>
          {endGame ? (
            <div></div>
          ) : (
            <button
              className={
                currentQ === questions.length - 1
                  ? "submit-btn text-white yellow-btn show-btn"
                  : "submit-btn text-white yellow-btn"
              }
              onClick={() => {
                if (window.confirm(confirmMess)) {
                  questions.forEach((question, index) => {
                    if (question.check_answer === correctAnswers[index]) {
                      score += 1;
                    }
                  });
                  setEndGame(true);
                }
              }}
            >
              Submit
            </button>
          )}
        </div>
        <Questions questions={questions} currentQ={currentQ}></Questions>
      </div>
    );
  }
};
