import React from "react";
import IceCream from "./IceCream";
import PropTypes from "prop-types";

function IceCreamList(props){
  return (
    <React.Fragment>
    <hr/>
    {props.iceCreamList.map((iceCream) =>
      <IceCream 
      whenIceCreamClicked = { props.onIceCreamSelection }
      whenScoopSold = { props.onSellingScoop }
      name={iceCream.name}
      price={iceCream.price}
      quantity={iceCream.quantity}
      id={iceCream.id}
      key={iceCream.id}/>
    )}
    <br />
    </React.Fragment>
  );
}

IceCreamList.propTypes = {
  iceCreamList: PropTypes.array,
  onIceCreamSelection: PropTypes.func,
  onSellingScoop: PropTypes.func
};

export default IceCreamList;