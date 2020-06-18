import React from "react";

export default function AdminTask(props) {
  return (
    //className="table table-striped table-dark"
    <table className="table table-striped table-dark" data-toggle="table">
      <thead>
        <tr>
          <th>Task ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Status</th>
          <th>Client ID</th>
          <th>Provider ID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map((task) => {
          return (
            <tr key={task.taskid}>
              <td>{task.taskid}</td>
              <td>{task.name}</td>
              <td>{task.category}</td>
              <td>{task.status}</td>
              <td>{task.clientid}</td>
              <td>{task.providerid}</td>
              <td>
                <input class="form-check-input" type="checkbox" id="checkbox" />
                <label
                  class="form-check-label"
                  for="checkbox"
                  class="mr-2 label-table"
                ></label>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
