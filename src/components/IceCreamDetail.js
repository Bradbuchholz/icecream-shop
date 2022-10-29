import React from "react";
import PropTypes from "prop-types";

IceCreamDetail.propTypes = {
  iceCream: PropTypes.object
};

function IceCreamDetail(props){
  const { iceCream } = props;
  return (
    <React.Fragment>
      <h3>IceCream Details</h3>
      <p><strong>Name: {iceCream.name}</strong></p>
      <p>Flavor: {iceCream.flavor}</p>
      <p>Scoops: {iceCream.scoops} Remaining</p>
    </React.Fragment>
  );
}

export default IceCreamDetail;