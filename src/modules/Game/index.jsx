import React, { useEffect, useState } from "react";
import Background from "core/components/Background";
import FootBar from "core/components/FootBar";
import TopBar from "core/components/TopBar";
import Deck from "core/components/Deck";
import "./index.css";
import { useGame, useEndGame } from "./hooks";
import { useHistory } from "react-router-dom";
import { generatePlayerId } from "./helpers";
import Modal from "core/components/Modal";

const Game = () => {
  const history = useHistory();
  const { endGame } = useEndGame();
  const { loadGame, responseLoadGame } = useGame();
  const [playerCards, setPlayerCards] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [playerTurn, setPlayerTurn] = useState(false);
  const [bugCards, setBugCards] = useState([]);
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
      setBugCards(responseLoadGame?.content?.bug.cards);
      setPlayerName(responseLoadGame?.content?.player.nickName);
    }
  });

  return (
    <div>
      <Background opacity="opacity" />
      <Deck />
      <TopBar />
      <Modal.PlayerCards openCards={playerTurn} cards={playerCards} />
      <FootBar name={playerName ? playerName : "Player"} onClick={() => setPlayerTurn(true)} />
    </div>
  );
};

export default Game;
