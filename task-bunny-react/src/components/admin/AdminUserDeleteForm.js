import React from "react";

export default function AdminDeleteUserForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label> Enter User ID</label>
        <input
          className="form-control"
          placeholder={"Enter User ID"}
          id="userid"
          label="userid"
          name="userid"
          onChange={props.onChange}
          onSubmit={props.onSubmit}
          value={props.user.userid}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
