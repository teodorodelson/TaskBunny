import React, { useState } from "react";
import AdminUserUpdateForm from "./AdminUserUpdateForm";
import { toast } from "react-toastify";

export default function AdminUserUpdate(props) {
  const [user, setUser] = useState({
    //userid: "",
    username: "",
    password: "",
    role: "",
    firstname: "",
    lastname: "",
    datejoined: "",
    picture: null,
  });

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    fetch("http://13.58.157.19:8081/users/update/" + user.userid, {
      method: "PUT",
      body: JSON.stringify({
        //userid: user.userid,
        username: user.username,
        password: user.password,
        role: user.role,
        firstname: user.firstname,
        lastname: user.lastname,
        datejoined: user.datejoined,
        picture: user.picture,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "true",
      },
    })
      .then((result) => {
        console.log(result);
        toast.success("User Updated");
        props.history.push("/ROLE_ADMIN");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong....");
      });
  }

  return (
    <div>
      <h3>Update a User</h3>
      <AdminUserUpdateForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        user={user}
      />
    </div>
  );
}
