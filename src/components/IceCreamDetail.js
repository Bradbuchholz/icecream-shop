import React from "react";
import PropTypes from "prop-types";

function IceCreamDetail(props){
  const { item, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>Item Details</h2>
      <hr/>
      <h3>{item.name}</h3>
      <p>Jugs available: {item.quantity.toFixed(3)}</p>
      <p>Price per Jug: ${item.price}</p>
      <p>Scoops available: <em>130 scoops per jug</em>: {130 * item.quantity} scoops</p>
      <p>ID : {item.id}</p>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={() => onClickingDelete(item.id)}>Delete Item</button>
    </React.Fragment>
  );
}

IceCreamDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default IceCreamDetail;