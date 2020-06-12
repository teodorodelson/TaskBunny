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
      {/* <Col md={12}>
        <Card>
          <p>{props.task.name}</p>
          <p>{props.task.client}</p>
          <p>{props.task.description}</p>
          <p>{props.task.price}</p>
          <p>{props.task.category}</p>
          <p>{props.task.duration}</p>
          <Link
            to={{
              pathname: `/task/${props.task.taskID}`,
              state: { task: props.task },
            }}
          >
            <button>View</button>
          </Link>
        </Card>
      </Col> */}

      {/* How do I take the id of the task and only render that specifics tasks details? 
      Do I need to create another route on App.js?
      */}

      {/* ---------------------------------------------- */}
      <Col md={12}>
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
      </Col>
    </>
  );
}

/* Put desciption in container so it doesn't go all the way over to the other side. */
