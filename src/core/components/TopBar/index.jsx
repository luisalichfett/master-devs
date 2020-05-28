import React from "react";
import "./index.css";
import Bug from "core/assets/img/bug.png";
import Text from "core/components/Text";
import Cards from "core/assets/img/deck.png";

const TopBar = () => (
  <div className="topbar">
    <div className="bug">
      <img alt="bug" src={Bug} />
    </div>
    <div className="info-bug">
      <Text.h1 text="Bug" />
    </div>
    <div className="cards-bug">
        <img alt="bug cards" src={Cards} />
      </div>
  </div>
);

export default TopBar;
