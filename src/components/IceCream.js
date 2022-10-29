import React from "react";
import PropTypes from "prop-types";


IceCream.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  scoops: PropTypes.number,
  id: PropTypes.string,
  whenScoopClicked: PropTypes.func,
  whenDecrementingScoopClicked: PropTypes.func
};

function IceCream(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>Flavor: {props.flavor}</p>
      <p>Price: ${props.price}</p>
      <p>Scoops: {props.scoops} Remaining</p>
      <Button onClick = {() => props.whenScoopClicked(props.id)}>IceCream Details</Button>
      <Button onClick = {() => props.whenDecrementingScoopClicked(props.id)}>Sell Scoop</Button>
      <hr />
    </React.Fragment>
  );
}

export default IceCream;