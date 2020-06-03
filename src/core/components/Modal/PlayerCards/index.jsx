import React from "react";
import Card from "core/components/Modal/Card";
import "./index.css";
import { useThrowCard } from "modules/Game/hooks";

const PlayerCards = (props) => {
  const { throwCard, responseThrowCard } = useThrowCard();
  console.log(responseThrowCard)

  const handleClick = (card) => {
    throwCard(props.id, card.id, props.id);
  };

  return (
    props.openCards && (
      <div>
        <div className="background" />
        <div className="cards">
          <Card cards={props.cards} onClick={(card) => handleClick(card)} />
        </div>
      </div>
    )
  );
};

export default PlayerCards;
