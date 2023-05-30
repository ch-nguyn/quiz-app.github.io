import React, { useState } from "react";
import "./App.css";
import { StartGame } from "./components/StartGame";
import { InGame } from "./components/InGame/InGame";
import { Routes, Route } from "react-router-dom";

function App() {
  let [startGame, setStartGame] = useState<boolean>(false);
  let handleStartGame = () => {
    setStartGame(true);
  };
  const QuizApp = () => {
    return (
      <div className="main">
        {startGame ? (
          <InGame x={""} />
        ) : (
          <StartGame onClick={handleStartGame} />
        )}
      </div>
    );
  };
  return (
    <Routes>
      <Route index element={<QuizApp />}></Route>
    </Routes>
  );
}

export default App;
