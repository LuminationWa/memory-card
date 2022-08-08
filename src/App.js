import React, { useState } from "react";
import "./Styles/styles.css";
import Scoreboard from "./Components/Scoreboard"
import PlayingField from "./Components/PlayingField"

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  return (
    <div className="App">
      <Scoreboard currentScore={currentScore}/>
      <PlayingField currentScore={currentScore}/>
    </div>
  );
}

export default App;
