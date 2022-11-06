import React from "react";
import PropTypes from "prop-types";

IceCreamDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

function IceCreamDetail(props){
  const { iceCream, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>IceCream Details</h2>
      <hr/>
      <h3>{iceCream.name}</h3>
      <p>Sacks On Hand: {iceCream.quantity.toFixed(3)}</p>
      <p>Price per Sack: ${iceCream.price}</p>
      <p>Scoops On Hand, <em>130 scoops per container</em>: {130 * iceCream.quantity} lb</p>
      <p>Flavor: {iceCream.flavor}</p>
      <p>ID : {iceCream.id}</p>
      <button onClick={ props.onClickingEdit }>Update IceCream</button>
      <button onClick={() => onClickingDelete(iceCream.id)}> Delete IceCream from List </button>
      
      <hr/>
    </React.Fragment>
  );
}


export default IceCreamDetail;