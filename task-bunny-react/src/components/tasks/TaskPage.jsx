import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function TaskPage(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    /* fetch(`http://13.58.157.19:8081/tasks/${props.location.state.category}`) */
    console.log("testing");
    // var token = JSON.parse(localStorage.getItem("token"));
    const token = localStorage.getItem("token");
    console.log(token);
    fetch(`http://13.58.157.19:8081/tasks`, {
      method: "GET",
      credentials: "include",
      //might not need
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
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

// function getMe(e) {
//   e.preventDefault();
//   var token = JSON.parse(localStorage.getItem('token'));
//   console.log(`Authorization=Bearer ${token}`)
//   fetch('/users/me', {
//       method: 'GET',
//       "content-type": "application/json", //might not need
//       headers: {
//           'Authorization': 'Bearer ' + token
//       }
//   })
//       .then(res => res.json())
//       .then(data => {
//           console.log(data)
//           // window.location.href = 'http://localhost:3000/dashboard';
//       })
//       .catch(err => { console.log(err) })
// }
