import React, { useState, useEffect } from "react";
import { useDeck } from "modules/Game/hooks";
import Modal from "core/components/Modal";
import DeckOfCards from "core/assets/img/deck.png";
import "./index.css";

const Deck = (props) => {
  const [deck, openDeck] = useState(false);
  const { deckCards, responseDeckCards } = useDeck();
  const [withdrawnCard, setWithDrawnCard] = useState(-1);
  
  useEffect(() => {
    deckCards();
  }, [deckCards]);

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
      <div className="cards" >
        <Modal.Card
          cards={[responseDeckCards?.content.juniorCards[withdrawnCard]]}
          onClick={(card) => props.onClick(card)}
        />
      </div>
    </div>
  );
};

export default Deck;
