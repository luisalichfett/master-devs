import React from "react";
import map from "lodash/map";
import Text from "core/components/Text";
import CardFront from "core/assets/img/card-front.png";
import "./index.css";

const Card = (props) =>
  props.cards &&
  map(props.cards, (card, index) => card ? (
    <div key={index} id={card.id} className="card" onClick={() => props.onClick(card)}>
      <img src={CardFront} />
      <div className="card-info">
        {card.lifeDamage && (
          <div className="damage">
            <div className="damage-text">
              <Text.h1 text={"Bug damage: "} />
            </div>
            <div className="damage-value">
              <Text.h1 text={card.lifeDamage.toString()} />
            </div>
          </div>
        )}
        {card.cost && (
          <div className="cost">
            <div className="cost-text">
              <Text.h1 text={"Mana Cost: "} />
            </div>
            <div className="cost-value">
              <Text.h1 text={card.cost.toString()} />
            </div>
          </div>
        )}
        {card.passive && (
          <div className="gain">
            <div className="gain-text">
              <Text.h1 text={"Mana Gain: "} />
            </div>
            <div className="gain-value">
              <Text.h1 text={card.passive.toString()} />
            </div>
          </div>
        )}
      </div>
      <div className="card-title">
        <Text.h2 text={card.title} />
      </div>
      <div className="card-description">
        <Text.h4 text={card.description} />
      </div>
    </div>
  ) : <div>You already have 4 cards!</div>);

export default Card;

{
  /* <div id="card" className="card">
<Text.h1 text="Title" />
<Text.h3 text="Description" />
  <div className="damage">
    <Text.h4 text= "Bug damage: 7" />
  </div>
  <div className="cost">
    <Text.h4 text="Mana Cost: 6" />
  </div>
  <div className="gain">
    <Text.h4 text="Mana Gain: 5" />
  </div>
</div>
); */
}
