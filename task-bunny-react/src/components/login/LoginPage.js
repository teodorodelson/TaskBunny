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

function LoginPage(props) {
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

  function isValidUser() {
    const users = [
      {
        username: "admin",
        password: "admin",
      },
      {
        username: "sansa",
        password: "stark",
      },
      {
        username: "theon",
        password: "greyjoy",
      },
    ];

    for (var i = 0; i < users.length; i++) {
      console.log(users[i]);
      console.log(userCredentials);
      if (
        users[i].username === userCredentials.username &&
        users[i].password === userCredentials.password
      ) {
        return true;
      }
    }
    return false;
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
    <div className="jumbotron">
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-label-title fontForTitles">
          <h1>Task Bunny</h1>
        </div>
        <br />
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
        <Link to="/register"> Not yet registered? click here to sign up!</Link>
        <Button variant="primary" type="submit" style={{ float: "right" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
