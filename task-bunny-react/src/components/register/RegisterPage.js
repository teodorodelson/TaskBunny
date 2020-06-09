import React, { useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterPage(props) {
  const [userCredentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     if (isValidUser()) {
  //       toast.success("Log In Successful");
  //       props.history.push("/home");
  //     } else {
  //       toast.error("Invalid username/password");
  //     }
  //   }

  function handleSubmit(event) {
    props.history.push("/home");
  }

  return (
    <div className="jumbotron jumbotron-reg">
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-label-title fontForTitles">
          <h1>Registration</h1>
        </div>
        <br />

        <Form.Group controlId="username">
          <Form.Label>Details</Form.Label>
          <Form.Control
            type="plaintext "
            placeholder="Enter details"
            name="username"
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>User Name:</Form.Label>
          <Form.Control
            type="plaintext "
            placeholder="Enter user name"
            name="username"
          />
        </Form.Group>


        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
          />
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>Role:</Form.Label>
          <Form.Control
            type="plaintext "
            placeholder="Enter role"
            name="username"
          />
        </Form.Group>

        <Link to="/"> <Button>Cancel</Button> </Link>
        <Button variant="primary" type="submit" style={{ float: "right" }}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default RegisterPage;
