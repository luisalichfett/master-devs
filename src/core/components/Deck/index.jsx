import React, { useState, useEffect } from "react";
import DeckOfCards from "core/assets/img/deck.png";
import Modal from "core/components/Modal";
import "./index.css";
import { useDeck } from "modules/Game/hooks";

const Deck = () => {
  const { newCard, responseNewCard } = useDeck();
  const [deck, openDeck] = useState(false);

  useEffect(() => {
    newCard();
  }, [newCard]);

  return !deck ? (
    <div className="content-deck" onClick={() => openDeck(true)}>
      <div className="deck-position">
        <div className="deck">
          <img alt="deck of cards" src={DeckOfCards} />
        </div>
      </div>
    </div>
  ) : (
    <Modal.Card cards={responseNewCard?.content.juniorCards} />
  );
};

export default Deck;
