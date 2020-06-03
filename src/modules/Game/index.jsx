import React, { useEffect, useState } from "react";
import Background from "core/components/Background";
import FootBar from "core/components/FootBar";
import TopBar from "core/components/TopBar";
import Deck from "core/components/Deck";
import { useGame, useEndGame, useBuyCard, useDeck } from "./hooks";
import { useHistory } from "react-router-dom";
import { generatePlayerId } from "./helpers";
import Modal from "core/components/Modal";
import "./index.css";

const Game = () => {
  const history = useHistory();
  const { endGame } = useEndGame();
  const { loadGame, responseLoadGame } = useGame();
  const { buyDeckCard, responseBuyDeckCard } = useBuyCard();
  const { deckCards, responseDeckCards } = useDeck();
  const [playerTurn, setPlayerTurn] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [playerCards, setPlayerCards] = useState([]);
  const [playerLife, setPlayerLife] = useState(0);
  const [playerMana, setPlayerMana] = useState(0);
  const [bugCards, setBugCards] = useState([]);
  const [bugLife, setBugLife] = useState(0);
  const [bugMana, setBugMana] = useState(0);
  const id = generatePlayerId(history);

  useEffect(() => {
    loadGame(id);
  }, [id, loadGame]);

  useEffect(() => {
    history.listen((location) => {
      if (location.pathname !== "/game") {
        endGame(id);
      }
    });
  }, [history]);

  useEffect(() => {
    if (responseLoadGame) {
      setPlayerCards(responseLoadGame?.content?.player.cards);
      setPlayerName(responseLoadGame?.content?.player.nickName);
      setPlayerLife(responseLoadGame?.content?.player.life);
      setPlayerMana(responseLoadGame?.content?.player.mana);
      setBugCards(responseLoadGame?.content?.bug.cards);
      setBugLife(responseLoadGame?.content?.bug.life);
      setBugMana(responseLoadGame?.content?.bug.mana);
    }
  });

  const handleBuyCard = (card) => {
    deckCards();
    buyDeckCard(id, card.id);
  };

  const handlePlayerTurn = () => {
    loadGame(id);
    setPlayerTurn(!playerTurn);
  };

  return (
    <div>
      <Background opacity="opacity" />
      <div className="game-content">
        <TopBar life={bugLife ? bugLife : ""} mana={bugMana ? bugMana : ""} />
        <Deck onClick={(card) => handleBuyCard(card)} id={id} />
        <Modal.PlayerCards
          openCards={playerTurn}
          cards={playerCards}
          id={id}
          closeCards={(close) => setPlayerTurn(close)}
        />
        <FootBar
          name={playerName ? playerName : "Player"}
          play={() => handlePlayerTurn()}
          life={playerLife ? playerLife : ""}
          mana={playerMana ? playerMana : ""}
        />
      </div>
    </div>
  );
};

export default Game;
