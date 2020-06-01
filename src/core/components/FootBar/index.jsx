import React from "react";
import Text from "core/components/Text";
import Player from "core/assets/img/player.png";
import Life from "core/assets/img/life.png";
import Mana from "core/assets/img/mana.webp";
import Cards from "core/assets/img/deck.png";
import Shield from "core/assets/img/passTurn.png";
import "./index.css";

const FootBar = (props) => (
  <div className="content-footbar">
    <div className="player-shadow" />
    <div className="footbar">
      <div className="player">
        <img alt="player" src={Player} />
      </div>
      <div className="info-player">
        <div className="mana">
          <img src={Mana} />
          <div className="mana-text">
            <div className="mana-text-title">
              <Text.h3 text={"Mana: "} />
            </div>
            <div className="mana-text-value">
              <Text.h3 text={props.mana} />
            </div>
          </div>
        </div>
        <div className="life">
          <img src={Life} />
          <div className="life-text">
            <div className="life-text-title">
              <Text.h3 text={"Life: "} />
            </div>
            <div className="life-text-value">
              <Text.h3 text={props.life} />
            </div>
          </div>
        </div>
        <div className="nickname">
          <Text.h2 text={props.name} />
        </div>
        <div className="play" onClick={props.play}>
          <img alt="player cards" src={Cards} />
          <div className="play-text">
            <Text.h3 text="Play" />
          </div>
        </div>
        <div className="pass-turn" onClick={props.jump}>
          <img alt="pass turn" src={Shield} />
          <div className="pass-text">
            <Text.h3 text="Pass" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FootBar;
