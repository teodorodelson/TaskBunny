import React from "react";

export default function AdminDeleteTaskForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label> Enter Task ID</label>
        <input
          className="form-control"
          placeholder={"Enter Task ID"}
          id="taskid"
          label="taskid"
          name="taskid"
          onChange={props.onChange}
          onSubmit={props.onSubmit}
          value={props.task.taskid}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
