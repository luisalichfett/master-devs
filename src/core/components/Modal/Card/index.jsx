import React from "react";
import map from "lodash/map";
import Text from "core/components/Text";
import "./index.css";

const Card = (props) =>
  props.cards &&
  map(props.cards, (card) => (
    <div id={card.id} className="card">
      <div className="card-title">
        <Text.h1 text={card.title} />
      </div>
      <div className="card-info">
        <Text.h3 text={card.description} />
        {card.lifeDamage && (
          <div className="damage">
            <div className="damage-text">
              <Text.h2 text={"Bug damage: "} />
            </div>
            <div className="damage-value">
              <Text.h2 text={card.lifeDamage} />
            </div>
          </div>
        )}
        {card.cost && (
          <div className="cost">
            <div className="cost-text">
              <Text.h2 text={"Mana Cost: "} />
            </div>
            <div className="cost-value">
              <Text.h2 text={card.cost} />
            </div>
          </div>
        )}
        {card.passive && (
          <div className="gain">
            <div className="gain-text">
              <Text.h2 text={"Mana Gain: "} />
            </div>
            <div className="gain-value">
              <Text.h2 text={card.passive} />
            </div>
          </div>
        )}
      </div>
    </div>
  ));

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
