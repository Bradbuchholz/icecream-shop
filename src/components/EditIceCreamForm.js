import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditIceCreamForm (props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({
      name: event.target.name.value,
      price: parseFloat(event.target.price.value),
      quantity: parseFloat(event.target.quantity.value),
      flavor: event.target.flavor.value,
      id: item.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditItemFormSubmission}
        buttonText="Update" />
    </React.Fragment>
  );
}

EditIceCreamForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
};

export default EditIceCreamForm;