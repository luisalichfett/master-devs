import React, { useEffect, useState } from "react";
import Background from "core/components/Background";
import FootBar from "core/components/FootBar";
import TopBar from "core/components/TopBar";
import Deck from "core/components/Deck";
import "./index.css";
import { usePlayer, useEndGame } from "./hooks";
import { useHistory } from "react-router-dom";
import { generatePlayerId, logOutAction } from "./helpers";

const Game = () => {
  const history = useHistory();
  const { loadPlayer, responseLoadPlayer } = usePlayer();
  const { endGame, responseEndGame } = useEndGame();
  const id = generatePlayerId(history);

  useEffect(() => {
    loadPlayer(id);
  }, [id, loadPlayer, logOutAction]);

  useEffect(() => {
      logOutAction(history)
  }, [logOutAction, history])

  return (
    <div>
      <Background opacity="opacity" />
      <FootBar />
      <TopBar />
      <Deck />
    </div>
  );
};

export default Game;
