import React, { useState } from "react";
import AdminUserDeleteForm from "./AdminUserDeleteForm";
import { toast } from "react-toastify";

export default function DeleteUser(props) {
  const [user, setUser] = useState({
    userid: "",
  });

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");

    fetch("http://13.58.157.19:8081/deleteuser/" + user.userid, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "true",
      },
    })
      .then((result) => {
        console.log(result);
        toast.success("user Deleted!");
        props.history.push("/ROLE_ADMIN");
      })
      .catch((err) => {
        toast.error("Something went wrong....");
      });
  }
  return (
    <div>
      <h3>Delete a User Below</h3>
      <AdminUserDeleteForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        user={user}
      />
    </div>
  );
}
