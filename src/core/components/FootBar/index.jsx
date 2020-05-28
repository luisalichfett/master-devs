import React from "react";
import PropTypes from "prop-types";
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
        <Text.h1 text="Player" />
      </div>
      <div className="play">
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

FootBar.propTypes = {
  playerImg: PropTypes.string,
  playerCardsImg: PropTypes.string,
};

export default FootBar;
