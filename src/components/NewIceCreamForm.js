import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

NewIceCreamForm.propTypes = {
  onNewIceCreamCreation: PropTypes.func
};

function NewIceCreamForm(props) {

  function handleNewIceCreamFormSubmission(event) {
    event.preventDefault();
    props.onNewIceCreamCreation({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: parseFloat(event.target.price.value),
      quantity: parseFloat(event.target.quantity.value),
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <h3>Add new IceCream to inventory</h3>
      <ReusableForm
        formSubmissionHandler={handleNewIceCreamFormSubmission}
        buttonText="Add IceCream" />
    </React.Fragment>
  );
}


export default NewIceCreamForm;