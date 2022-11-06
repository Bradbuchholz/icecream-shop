import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

EditIceCreamForm.propTypes = {
  iceCream: PropTypes.object,
  onEditIceCream: PropTypes.func
};

function EditIceCreamForm (props) {
  const { iceCream } = props;

  function handleEditIceCreamFormSubmission(event) {
    event.preventDefault();
    props.onEditIceCream({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: parseFloat(event.target.price.value),
      quantity: parseFloat(event.target.quantity.value),
      id: iceCream.id
      });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditIceCreamFormSubmission}
        buttonText="Update IceCream" />
    </React.Fragment>
  );
}

export default EditIceCreamForm; 
