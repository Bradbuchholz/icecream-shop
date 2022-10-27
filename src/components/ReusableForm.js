import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name of IceCream" />
        <br/>
        <input
          type="number"
          min="0.00"
          step="0.01"
          name="price"
          placeholder="Price per Jug" />
        <br/>
        <input 
          type="number"
          name="quantity"
          min="1"
          step="0.001"
          placeholder="Initial Quantity" />
        <br/>
        <input 
          type="text"
          name="flavor"
          placeholder="Flavor"
          list="flavors" />
        <datalist id="flavors">
          <option value = "Vanilla" />
          <option value = "Chocolate" />
          <option value = "Strawberry" />
        </datalist>
        <br/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;