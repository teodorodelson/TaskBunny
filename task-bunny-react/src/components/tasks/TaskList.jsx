import React from "react";
import { Link } from "react-router-dom";

export default function TaskList(props) {
  return (
    <>
      <p>{props.task.name}</p>
      <p>{props.task.client}</p>
      <p>{props.task.description}</p>
      <p>{props.task.price}</p>
      <p>{props.task.category}</p>
      <Link
        to={{
          pathname: `/task/${props.task.taskID}`,
          state: { task: props.task },
        }}
      >
        <button>View</button>
      </Link>

      {/* How do I take the id of the task and only render that specifics tasks details? 
      Do I need to create another route on App.js?
      */}
    </>
  );
}
