import React, { useState, useEffect } from "react";
import TaskInFocus from "./TaskInFocus";

export default function TaskView(props) {
  const [task, setTask] = useState([]); /* Will this be an array or object? */

  useEffect(() => {
    fetch(
      `http://localhost:5000/${props.location.state.task.taskID}`
    ) /* Need to click on a link for this to work correctly */
      .then((response) => response.json())
      .then((data) => {
        setTask(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Task</h1>
      {/* <TaskInFocus task={task} /> */}
      <TaskInFocus /> {/* Remove */}
    </>
  );
}
