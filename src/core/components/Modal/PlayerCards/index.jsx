import React from "react";
import Card from "core/components/Modal/Card";
import "./index.css";

const PlayerCards = (props) => {

  return (
    props.openCards && (
      <div>
        <div className="background" />
        <div className="cards"><Card cards={props.cards} /></div>
      </div>
    )
  );
};

export default PlayerCards;
