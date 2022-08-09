import React, { useState, useEffect } from "react";
const PlayingField = (props) => {
  const [status, setStatus] = useState(1);
  let allCards = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let clickedCards = [];
  let usedSpots = [];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const setDefault = () => {
    allCards = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    clickedCards = [];
  };
  const placeCard = () => {
    let placement = getRandomInt(allCards.length);
    if (usedSpots.includes(placement)) placeCard();
    else {
      usedSpots.push(placement);
      console.log("going");
      return placement;
    }
  };
  const makePlayingField = () => {
    // Needs to be random, maybe randomize the grid area?  !!!!!!!!!!
    setDefault();
    let playingField = document.getElementById("playing-field");
    allCards.forEach((element, index) => {
      let card = document.createElement("button");
      card.classList.add(element, "card");
      card.id = "card-" + index;
      card.style.gridArea = placeCard();
      console.log("happened");
      console.log(index);
      card.addEventListener("click", function () {
        checkCards(index);
      });
      playingField.append(card);
    });
  };
  const checkCards = (index) => {
    clickedCards.includes(index) ? lose() : clickedCards.push(index);
    if (clickedCards.length === allCards.length) win();
    console.log(clickedCards);
  };
  const win = () => {
    console.log("win");
  };
  const lose = () => {
    console.log("lose");
  };

  useEffect(() => {
    console.log("effect");
    makePlayingField();
  }, [status]);

  return <div id="playing-field"></div>;
};

export default PlayingField;
