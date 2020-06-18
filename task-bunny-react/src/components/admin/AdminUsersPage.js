import React from "react";
import AdminUser from "./AdminUsers";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

export default class AdminUserPage extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    //fetch("http://13.58.157.19:8081/users")
    fetch("http://13.58.157.19:8081/users", {
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
          users: data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>Users </h3>
        <AdminUser users={this.state.users} />
        <Link to="/ROLE_ADMIN/delete">
          <button className="btn btn-secondary btn-lg">Delete</button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/ROLE_ADMIN/update">
          <button className="btn btn-secondary btn-lg">Update</button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/admin-task">
          <button className="btn btn-secondary btn-lg">Tasks</button>
        </Link>
      </div>
    );
  }
}
