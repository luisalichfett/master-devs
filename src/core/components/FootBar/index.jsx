import React from "react";
import Text from "core/components/Text";
import Player from "core/assets/img/player.png";
import Cards from "core/assets/img/deck.png";
import "./index.css";

const FootBar = (props) => (
  <div className="content-footbar">
    <div className="player-shadow" />
    <div className="footbar">
      <div className="player">
        <img alt="player" src={Player} />
      </div>
      <div className="info-player">
        <Text.h1 text={props.name} />
      </div>
      <div className="play" onClick={props.onClick}>
        <div className="choose-card-player">
          <Text.h3 text="Choose card" />
        </div>
        <div className="cards-player">
          <img alt="player cards" src={Cards} />
        </div>
      </div>
    </div>
  </div>
);

export default FootBar;
