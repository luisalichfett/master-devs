import React from "react";
import map from "lodash/map";
import Text from "core/components/Text";
import "./index.css";

const PlayerCards = (props) => {
  const Card = () => 
    <div className="card">
        <Text.h1 text="Title" />
        <Text.h2 text="Description of card, really long card, let's go I can't take it anymore but we are still here. I miss my boyfriend!!!!!!!!!!!!!!!!!!!!!! 1234566" />
    </div>
    // props.cards &&
    // map(props.cards, (card) => (
    //   <div id={card.id} className="card">
    //     <Text.h1 text={card.title} />
    //     <Text.h3 text={card.description} />
    //   </div>
    // ));

  return (
    props.openCards && (
      <div>
        <div className="background" />
        <div className="cards">{Card()}</div>
      </div>
    )
  );
};

export default PlayerCards;
