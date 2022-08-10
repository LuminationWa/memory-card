import React, { useState, useEffect } from "react";
const PlayingField = (props) => {
  const [status, setStatus] = useState(0);
  let allCards = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let clickedCards = [];
  let usedSpots = [];
  let count = 0;
  let playingField = document.getElementById("playing-field");

  useEffect(() => {
    console.log("effect");
    makePlayingField();
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

  const setDefault = () => {
    resetPlayingField();
    allCards = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    clickedCards = [];
    props.setCurrentScore(0);   
  };

  const resetPlayingField = () => {
    let playingField = document.getElementById("playing-field");
    playingField.textContent = "";
  }

  const placeCard = () => {
    let placement = getRandomInt(allCards.length);
    if (usedSpots.includes(placement)) placeCard();
    else {
      usedSpots.push(placement);
      return placement;
    };
  };

  const checkCards = (index) => {
    if (clickedCards.includes(index)) lose();
    else {
        clickedCards.push(index);
        updateScore();
    };
    if (clickedCards.length === allCards.length) win();
  };

  const win = () => {
    console.log("win");
  };

  const lose = () => {
    props.setCurrentScore(0);
    console.log("lose");
  };

  const updateScore = () => {
    count++;
    props.setCurrentScore(count);    
  };

  const generateCards = () => {
    let playingField = document.getElementById("playing-field");
    allCards.forEach((element, index) => {
      // Places a card and then uses that position as grid-area
      // The card class works as common styling and the id sets the specific background
      placeCard();
      let cardPlacement = usedSpots[usedSpots.length - 1];
      let card = document.createElement("button");
      card.classList.add(element, "card");
      card.id = "card-" + index;
      card.addEventListener("click", function () {
        // When clicked checks for result and unless win() or lose() get triggered randomizes card placements again and game continues
        checkCards(index);
        makePlayingField();
      });
      card.style.gridArea = String.fromCharCode(cardPlacement + 65);
      playingField.append(card);
    });
  };

  const makePlayingField = () => {
    usedSpots = [];
    resetPlayingField();
    generateCards();
  };

  return (
    <div>
      <div id="playing-field"></div>
      <button onClick={() => {
        setDefault();
        }}>Restart</button>
    </div>
  );
};

export default PlayingField;
