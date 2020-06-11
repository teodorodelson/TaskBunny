import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CategoryList(props) {
  return (
    <>
      <div className="col-md-4" style={{ marginTop: "15px" }}>
        <img src={props.category.picture} width="350px" />
        <h3>{props.category.category}</h3>
        <p>{props.category.desc}</p>
        <Link to={{ pathname: "/tasks", state: { category: props.category } }}>
          <button>Go</button>
        </Link>
      </div>
    </>
  );
}
