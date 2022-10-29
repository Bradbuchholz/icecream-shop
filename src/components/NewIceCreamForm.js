import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewIceCreamForm(props) {

  function handleNewIceCreamFormSubmission(event) {
    event.preventDefault();
    props.onNewIceCreamCreation({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      scoops: Math.floor(parseFloat(event.target.iceCream.value) * 124),
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

NewIceCreamForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewIceCreamForm;