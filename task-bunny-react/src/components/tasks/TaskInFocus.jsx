import React from "react";
import { Link } from "react-router-dom";

export default function TaskInFocus(props) {
  return (
    <>
      <section>
        <img src={props.task.img} alt={props.task.name} />
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
        <button>Pick Up Task</button>
      </Link>
    </>
  );
}

/* Conditionally Rener Button to be Pick Up Task, In Progress, or Finished? */
