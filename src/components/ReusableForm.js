import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>

        <form onSubmit={props.formSubmissionHandler}>
                <input
                  type="text"
                  name="name"
                  placeholder="EX: Very Vanilla" 
                  required />
                <input   
                  type="text"
                  name="flavor"
                  placeholder="EX: Vanilla"
                  required />
                <input
                  type="number"
                  name="price"
                  placeholder="EX: 3"
                  required />
                <input
                  type="number"
                  name="scoops"
                  placeholder="EX: 2"
                  required 
                  step="0.1"
                  min="0.1" />
          <button type="submit">{props.buttonText}</button>
        </form>

      <hr />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;