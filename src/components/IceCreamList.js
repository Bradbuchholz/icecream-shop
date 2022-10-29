import React from "react";
import IceCream from "./IceCream";
import PropTypes from "prop-types";

IceCreamList.propTypes = {
  iceCreamList: PropTypes.array,
  onIceCreamDetailsSelection: PropTypes.func,
  onDecrementingScoops: PropTypes.func
}

function IceCreamList(props) {

  return (
    <React.Fragment>
      {props.iceCreamList.map((iceCream) => 
        <IceCream
          whenScoopClicked={props.onIceCreamDetailsSelection}
          whenDecrementingPintsClicked={props.onDecrementingScoops}
          name={iceCream.name}
          brand={iceCream.brand}
          price={iceCream.price}
          id={iceCream.id}
          key={iceCream.id} />
      )}
    </React.Fragment>
  );
}

export default IceCreamList;