import React, { useState, useEffect } from "react";
const PlayingField = (props) => {
    const [allCards, setAllCards] = useState(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    const [clickedCards, setClickedCards] = useState([]);
    const setDefault = () => {
        setAllCards(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
        setClickedCards([]);
    };
    const makePlayingField = () => {
        // Needs to be random, maybe randomize the grid area?  !!!!!!!!!!1
        let playingField = document.getElementById("playing-field");
        allCards.forEach( (element, index) => {
            let card = document.createElement("button");
            card.id = index;
            card.addEventListener("click", function() {
                checkCards(card.id);
            });
            playingField.append(card);
        })          
    };
    const checkCards = (id) => {
        if (id in clickedCards) lose();
        else if (clickedCards.length === allCards.length) win();
        else setClickedCards(current => [...current, id]);
        console.log(clickedCards);
    };
    const win = () => {
        console.log("win");
    };
    const lose = () => {
        console.log("lose");
    };

    useEffect(() => {
        makePlayingField();
    });

    return (
        <div id="playing-field">            
        </div>
    )
}

export default PlayingField;