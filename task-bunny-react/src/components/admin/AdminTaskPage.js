import React from "react";
import AdminTask from "./AdminTask";
import { Link } from "react-router-dom";

export default class AdminTaskPage extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    //fetch("http://13.58.157.19:8081/tasks")
    const token = localStorage.getItem("token");
    console.log(token);
    fetch(`http://13.58.157.19:8081/tasks`, {
      method: "GET",
      //might not need
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          tasks: data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>Task Progress </h3>
        <AdminTask tasks={this.state.tasks} />
        <Link to="/admin-task/delete">
          <button className="btn btn-secondary btn-lg">Delete</button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/admin-user">
          <button className="btn btn-secondary btn-lg">Users</button>
        </Link>
      </div>
    );
  }
}
