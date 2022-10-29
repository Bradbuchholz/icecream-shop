import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

IceCream.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  scoopss: PropTypes.number,
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
      <Button className="me-2" onClick = {() => props.whenScoopClicked(props.id)}>Keg Details</Button>
      <Button variant="success" className="me-2" onClick = {() => props.whenDecrementingScoopClicked(props.id)}>Sell Pint</Button>
      <hr />
    </React.Fragment>
  );
}

export default IceCream;