import { useState } from "react";
import { InGame } from "../InGame/InGame";
import { StartGame } from "../StartGame";
import { Review } from "./Review";

export const EndGame = (props: any) => {
  let [tryAgain, setTryAgain] = useState<boolean>(false);
  let [startGame, setStartGame] = useState<boolean>(false);
  let [review, setReview] = useState<boolean>(false);
  let handleStartGame = () => {
    setStartGame(true);
  };
  if (tryAgain) {
    return (
      <div>
        {startGame ? <InGame /> : <StartGame onClick={handleStartGame} />}
      </div>
    );
  } else {
    if (review) {
      return <Review questions={props.questions}></Review>;
    } else {
      return (
        <div className="end-game">
          <h1 className="text-white mb-15 text-light">
            Your score is : <span className="text-bold">{props.score}</span>
          </h1>
          <div className="end-game-tn">
            <button
              className="green-btn"
              onClick={() => {
                props.questions.map((question: any) => {
                  question.check_answer = NaN;
                });
                setTryAgain(true);
              }}
            >
              Try again
            </button>
            <button
              className="red-btn text-white"
              onClick={() => {
                setReview(true);
              }}
            >
              Review
            </button>
          </div>
        </div>
      );
    }
  }
};
