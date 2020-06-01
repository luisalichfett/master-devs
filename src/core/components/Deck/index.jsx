import React, { useState, useEffect } from "react";
import DeckOfCards from "core/assets/img/deck.png";
import Modal from "core/components/Modal";
import "./index.css";
import { useDeck } from "modules/Game/hooks";

const Deck = () => {
  const [deck, openDeck] = useState(false);
  const { newCard, responseNewCard } = useDeck();
  const [withdrawnCard, setWithDrawnCard] = useState(-1);

  useEffect(() => {
    newCard();
  }, [newCard]);

  const handleClick = () => {
    openDeck(!deck);
    setWithDrawnCard(withdrawnCard + 1);
  };

  return !deck ? (
    <div className="content-deck" onClick={handleClick}>
      <div className="deck-position">
        <div className="deck">
          <img alt="deck of cards" src={DeckOfCards} />
        </div>
      </div>
    </div>
  ) : (
    <div onClick={() => openDeck(false)}>
      <div className="background" />
      <div className="cards">
        <Modal.Card
          cards={[responseNewCard?.content.juniorCards[withdrawnCard]]}
        />
      </div>
    </div>
  );
};

export default Deck;
