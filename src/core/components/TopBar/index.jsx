import React from "react";
import Bug from "core/assets/img/bug.png";
import Text from "core/components/Text";
import Life from "core/assets/img/lifeBug.webp";
import Mana from "core/assets/img/manaBug.png";
import Cards from "core/assets/img/deck.png";
import "./index.css";

const TopBar = (props) => (
  <div className="content-topbar">
    <div className="topbar">
      <div className="bug">
        <img alt="bug" src={Bug} />
      </div>
      <div className="info-bug">
        <div className="cards-bug">
          <img alt="bug cards" src={Cards} />
        </div>
        <div className="bugname">
          <Text.h2 text="Bug" />
        </div>
        <div className="life-bug">
          <img src={Life} />
          <div className="life-bug-text">
            <div className="life-bug-text-title">
              <Text.h3 text={"Life: "} />
            </div>
            <div className="life-bug-text-value">
              <Text.h3 text={props.life.toString()} />
            </div>
          </div>
        </div>
        <div className="mana-bug">
          <img src={Mana} />
          <div className="mana-bug-text">
            <div className="mana-bug-text-title">
              <Text.h3 text={"Mana: "} />
            </div>
            <div className="mana-bug-text-value">
              <Text.h3 text={props.mana.toString()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
