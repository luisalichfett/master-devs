import React from "react";
import "./index.css";
import DeckOfCards from "core/assets/img/deck.png";

const Deck = () => (
  <div className="content-deck">
    <div className="deck-position">
      <div className="deck">
        <img alt="deck of cards" src={DeckOfCards} />
      </div>
    </div>
  </div>
);

export default Deck;
