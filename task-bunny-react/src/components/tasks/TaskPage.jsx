import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function TaskPage(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    /* fetch(`http://13.58.157.19:8081/tasks/${props.location.state.category}`) */
    fetch(`http://13.58.157.19:8081/tasks/`)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <h1>Tasks: {props.location.state.category.category}</h1>
          {tasks.map((task) => {
            return <TaskList task={task} />;
          })}
          {/* <TaskList /> */} {/* Remove */}
        </Row>
      </Container>
    </>
  );
}
