import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";

export default function TaskPage(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${props.location.state.category}`)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Tasks: {props.location.state.category.category}</h1>
      {tasks.map((task) => {
        return <TaskList task={task} />;
      })}
    </>
  );
}
