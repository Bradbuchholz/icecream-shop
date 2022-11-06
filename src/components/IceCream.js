import React from "react";
import PropTypes from "prop-types";


IceCream.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenIceCreamClicked: PropTypes.func,
  whenScoopSold: PropTypes.func
};

function IceCream(props){
  return (
    <React.Fragment>
      <div onClick = {()=> props.whenIceCreamClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Flavor: {props.flavor}</p>
        <p>Containers On Hand: {props.quantity.toFixed(3)}</p>
        <p>Price per Container: {props.price}</p>
        <p>Scoops On Hand (130 scoops per container): {(130 * props.quantity).toFixed(0)}lb</p>
      </div>
      <div>
        <button type="button" onClick = {()=> props.whenScoopSold(props.id)}>Consume 1 scoop</button>
        <hr />
      </div>
    </React.Fragment>
  );
}

export default IceCream;