import React, { useState } from "react";
import "./App.css";
import { StartGame } from "./components/StartGame";
import { InGame } from "./components/InGame/InGame";

function App() {
  let [startGame, setStartGame] = useState<boolean>(false);
  let handleStartGame = () => {
    setStartGame(true);
  };
  return (
    <div className="main">
      {startGame ? <InGame /> : <StartGame onClick={handleStartGame} />}
    </div>
  );
}

export default App;
