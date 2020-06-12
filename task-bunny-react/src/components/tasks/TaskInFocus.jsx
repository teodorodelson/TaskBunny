import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
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
              <Card.Img src={dummyTask.img} alt={dummyTask.name} />
              <Card.Body>
                <h2>{dummyTask.name}</h2>
                <h5>
                  {dummyTask.client}{" "}
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
                  ${dummyTask.price}
                </p>
                <p>{dummyTask.description}</p>
                <p style={{ color: "green" }}>{dummyTask.duration}</p>
                {/* <p className="badge badge-warning" style={{ fontSize: "15px" }}>
              {dummyTask.rating.toFixed(1)}
            </p> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Link
        to={{
          pathname: `/provider tasks`,
        }}
      >
        <button className="btn btn-success" style={{ float: "right" }}>
          Pick Up Task
        </button>
      </Link>
    </>
  );
}

/* Conditionally Render Button to be Pick Up Task, In Progress, or Finished? */
/* Do Database query to add Task to provider */
/* Give the state of the task to the provider and make a database query, or just a database query */
