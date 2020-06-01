import React from "react";
import Text from "core/components/Text";
import "./index.css";

const Rules = () => {
    
  return (
  <div className="modal">
    <div className="game">
        <div className="rules">
         <Text.h1 text="Game Rules"/>
         <Text.h3 text="* To drop a card you need to spend an amount of mana;
         * When starting the game you will have 20 mana points and 20 life points;
         * At the end of each round, you recover 2 mana points;
         * Passing is allowed if you want to save mana for the next round." />
         <button className="next">Next</button>
       </div>
    </div>
  </div>)
    

}

export default Rules;
