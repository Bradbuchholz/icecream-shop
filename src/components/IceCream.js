import React from "react";
import PropTypes from "prop-types";

function IceCream(props){
  return (
    <React.Fragment>
      <div onClick = {()=> props.whenIceCreamClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Flavor: {props.flavor}</p>
        <p>Jugs On Hand: {props.quantity.toFixed(3)}</p>
        <p>Price per Jug: {props.price}</p>
        <p>Scoops On Hand (130 scoops per Jug): {(130 * props.quantity).toFixed(0)}lb</p>
      </div>
      <div>
        <button type="button" onClick = {()=> props.whenScoopSold(props.id)}>Consume 1 scoops</button>
        <hr />
      </div>
    </React.Fragment>
  );
}

IceCream.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func,
  whenPoundSold: PropTypes.func
};

export default IceCream;