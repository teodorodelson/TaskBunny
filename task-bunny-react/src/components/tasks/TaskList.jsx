import React, { useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function TaskList(props) {
  const [dummyTask, setDummyTask] = useState({
    taskID: 1,
    name: "Plumbing Help Needed",
    client: "Sarah Washington",
    description: "Redoing bathroom and need help outfitting plumbing",
    price: 300,
    category: "Home Repair",
    duration: "3 weeks",
  }); /* Dummy Data */
  return (
    <>
      <Col md={12} style={{ marginTop: "20px" }}>
        <Card>
          <div className="card-header">{props.task.category}</div>
          <Card.Body>
            <h3 className="card-title" style={{ display: "inline-block" }}>
              {props.task.name}
            </h3>
            <p
              style={{
                display: "inline-block",
                float: "right",
                fontWeight: "bold",
                fontSize: "27px",
              }}
            >
              ${props.task.amountpaid}
            </p>
            <p>{props.task.description}</p>
            <p style={{ display: "inline-block", color: "green" }}>
              {dummyTask.duration}
            </p>
            <Link
              to={{
                pathname: `/task/${props.task.taskid}`,
                state: { task: props.task },
              }}
            >
              <button
                className="btn btn-danger"
                style={{ display: "inline-block", float: "right" }}
              >
                View
              </button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <small>{props.task.clientid}</small>
          </Card.Footer>
        </Card>
      </Col>

      {/* How do I take the id of the task and only render that specifics tasks details? 
      Do I need to create another route on App.js?
      */}

      {/* ---------------------------------------------- */}
      {/* <Col md={12}>
        <Card>
          <div className="card-header">{dummyTask.category}</div>
          <Card.Body>
            <h3 className="card-title" style={{ display: "inline-block" }}>
              {dummyTask.name}
            </h3>
            <p
              style={{
                display: "inline-block",
                float: "right",
                fontWeight: "bold",
                fontSize: "27px",
              }}
            >
              ${dummyTask.price}
            </p>
            <p>{dummyTask.description}</p>
            <p style={{ display: "inline-block", color: "green" }}>
              {dummyTask.duration}
            </p>
            <Link
              to={{
                pathname: `/task/${dummyTask.taskID}`,
                state: { task: dummyTask },
              }}
            >
              <button
                className="btn btn-danger"
                style={{ display: "inline-block", float: "right" }}
              >
                View
              </button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <small>{dummyTask.client}</small>
          </Card.Footer>
        </Card>
      </Col> */}
    </>
  );
}

/* Put desciption in container so it doesn't go all the way over to the other side. */
/* Need duration to be in the table */
/* Render only part of the description not the whole thing */
