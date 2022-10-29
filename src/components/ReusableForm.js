import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
function ReusableForm(props) {
  return (
    <React.Fragment>

        <Form onSubmit={props.formSubmissionHandler}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>IceCream Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="EX: Very Vanilla" 
                  required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Flavor</Form.Label>
                <Form.Control
                  type="text"
                  name="flavor"
                  placeholder="EX: Vanilla"
                  required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Price Per Scoop</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="EX: 3"
                  required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Number of jugs</Form.Label>
                <Form.Control
                  type="number"
                  name="jugs"
                  placeholder="EX: 2"
                  required 
                  step="0.1"
                  min="0.1" />
                  <Form.Text className="text-muted">You can add open jugs using a number like 0.1 or 0.5.</Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" className="my-3 w-100" type="submit">{props.buttonText}</Button>
        </Form>

      <hr />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;