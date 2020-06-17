import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import JWTD from "jwt-decode";
import Axios from "axios";
import { toast } from "react-toastify";
import laundryCategory from "../../Assets/laundry-category.jpg";

export default function TaskInFocus(props) {
  const [dummyTask, setDummyTask] = useState({
    img: laundryCategory,
    name: "Plumbing Help Needed",
    client: "Sarah Washington",
    description: "Redoing bathroom and need help outfitting plumbing",
    price: 300,
    rating: 5.0,
    category: "Home Repair",
    duration: "3 weeks",
  }); /* Dummy Data */
  const [providerID, setProviderID] = useState("");
  const [task, setTask] = useState([]);

  function handleClick(e) {
    const token = localStorage.getItem("token");
    const username = JWTD(token).sub;

    Axios.get("http://13.58.157.19:8081/users/userByname/" + username, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => setProviderID(result.data))
      .catch((err) => console.log("error username:" + err));

    Axios.put("http://13.58.157.19:8081/tasks/provider/" + props.task.taskid, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify({
        taskid: props.task.taskid,
        name: props.task.name,
        category: props.task.category,
        description: props.task.description,
        status: "in progress",
        amountpaid: props.task.amountpaid,
        clientid: props.task.clientid,
        providerid: providerID,
      }),
    })
      .then((result) => console.log(result))
      .catch((err) => console.log("error role:" + err));

    toast.success("Task Picked Up");
    //props.history.push("/provider page");
  }

  return (
    <>
      {/* <section>
        <img src={props.task.img} alt={props.task.name} />
        <p>{props.task.description}</p>
        <h2>{props.task.name}</h2>
        <h3>{props.task.client}</h3>
      </section>
      <section>
        <p>{props.task.description}</p>
        <p>{props.task.duration}</p>
        <p>{props.task.rating}</p>
      </section>
      <Link
        to={{
          pathname: `/provider tasks`,
        }}
      >
        <button className="btn btn-success">Pick Up Task</button>
      </Link> */}

      {/* =============================== */}
      <div className="container-fluid">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img src={props.image} alt={props.task.name} />
              <Card.Body>
                <h2>{props.task.name}</h2>
                <h5>
                  {props.task.clientid}{" "}
                  <span
                    className="badge badge-warning"
                    style={{ fontSize: "13px" }}
                  >
                    {dummyTask.rating.toFixed(1)}
                  </span>
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                  ${props.task.amountpaid}
                </p>
                <p>{props.task.description}</p>
                <p style={{ color: "green" }}>{props.time}</p>
                {/* <Link
                  to={{
                    pathname: `/provider tasks`,
                  }}
                  onClick={handleClick}
                > */}
                <button
                  className="btn btn-success"
                  style={{ float: "right" }}
                  onClick={handleClick}
                >
                  Pick Up Task
                </button>
                {/* </Link> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

/* Conditionally Render Button to be Pick Up Task, In Progress, or Finished? */
/* Do Database query to add Task to provider */
/* Give the state of the task to the provider and make a database query, or just a database query */
