import React, { useState, useEffect } from "react";

const Scoreboard = (props) => {
  const [bestScore, setBestScore] = useState(0);
  const isRecord = () => {
    if (props.currentScore > bestScore) setBestScore(props.currentScore);
  };
  useEffect(() => {
    isRecord();
  });
  return (
    <div>
      <h2>Current score {props.currentScore}</h2>
      <h2>Best score {bestScore}</h2>
    </div>
  );
};

export default Scoreboard;
