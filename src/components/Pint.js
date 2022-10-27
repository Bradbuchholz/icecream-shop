import React from "react";
import PropTypes from "prop-types";

function Pint(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>Flavor: {props.flavor}</p>
      <p>Price: ${props.price}</p>
      <p>Scoopss: {props.scoops} remaining</p>
    </React.Fragment>
  )
}