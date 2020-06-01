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
      <Text.h3 text={card.description} />
      {console.log(props.cards)}
      {card.lifeDamage && (
        <div className="damage">
          <Text.h4 text={"Bug damage: " + card.lifeDamage} />
        </div>
      )}
      {card.cost && (
        <div className="cost">
          <Text.h4 text={"Mana Cost: " + card.cost} />
        </div>
      )}
      {card.passive && (
        <div className="gain">
          <Text.h4 text={"Mana Gain: " + card.passive} />
        </div>
      )}
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
