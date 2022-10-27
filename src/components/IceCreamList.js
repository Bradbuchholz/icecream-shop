import React from "react";
import IceCream from "./IceCream";
import PropTypes from "prop-types";

function IceCreamList(props){
  return (
    <React.Fragment>
    <hr/>
    {props.iceCreamList.map((item) =>
      <Item 
      whenItemClicked = { props.onItemSelection }
      whenScoopSold = { props.onSellingScoop }
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      id={item.id}
      key={item.id}/>
    )}
    <br />
    </React.Fragment>
  );
}

IceCreamList.propTypes = {
  inventoryList: PropTypes.array,
  onItemSelection: PropTypes.func,
  onSellingScoop: PropTypes.func
};

export default IceCreamList;