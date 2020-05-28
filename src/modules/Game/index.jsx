import React, { useEffect } from "react";
import Background from "core/components/Background";
import FootBar from "core/components/FootBar";
import TopBar from "core/components/TopBar";
import Deck from "core/components/Deck";
import "./index.css";
import usePlayer from "./hooks";
import { useHistory } from "react-router-dom";
import { generatePlayerId } from "./helpers";

const Game = () => {
    const history = useHistory();
    const { loadPlayer, responseData } = usePlayer();

    const id = generatePlayerId(history)

    useEffect(() => {
        loadPlayer(id)
    }, [id, loadPlayer])

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
