import React, { useState } from "react";
import AdminTaskDeleteForm from "./AdminTaskDeleteForm";
import { toast } from "react-toastify";

export default function DeleteTask(props) {
  const [task, setTask] = useState({
    taskid: "",
  });

  function handleChange(event) {
    setTask({ ...task, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");

    fetch("http://13.58.157.19:8081/deletetask/" + task.taskid, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "true",
      },
    })
      .then((result) => {
        toast.success("Task Deleted!");
        props.history.push("/admin-task");
      })
      .catch((err) => {
        toast.error("Something went wrong....");
        console.log(err);
      });
  }
  return (
    <div>
      <h3>Delete a Task Below</h3>
      <AdminTaskDeleteForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        task={task}
      />
    </div>
  );
}
