import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewIceCreamForm(props){

  function handleNewIceCreamFormSubmission(event){
    event.preventDefault();
    props.onNewInventoryCreation({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: parseFloat(event.target.price.value),
      quantity: parseFloat(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewIceCreamFormSubmission}
        buttonText="Add To Inventory" />
    </React.Fragment>
  );
}

NewIceCreamForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewIceCreamForm;