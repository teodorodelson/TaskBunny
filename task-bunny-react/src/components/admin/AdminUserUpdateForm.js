import React from "react";

export default function AdminUpdateUserForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label>User ID</label>
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
      <div className="form-group">
        <label>Username</label>
        <input
          className="form-control"
          placeholder={"Enter username"}
          id="username"
          label="username"
          onChange={props.onChange}
          onSubmit={props.onSubmit}
          name="username"
          value={props.user.username}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          placeholder={"Enter password"}
          id="password"
          label="password"
          onChange={props.onChange}
          onSubmit={props.onSubmit}
          name="password"
          value={props.user.password}
        />
      </div>
      <div className="form-group">
        <label> Role</label>
        <input
          className="form-control"
          placeholder={"Enter Role"}
          id="role"
          label="role"
          onChange={props.onChange}
          onSubmit={props.onSubmit}
          name="role"
          value={props.user.role}
        />
      </div>
      <div className="form-group">
        <label> First Name</label>
        <input
          className="form-control"
          placeholder={"Enter First Name"}
          id="firstname"
          label="firstname"
          onChange={props.onChange}
          onSubmit={props.onSubmit}
          name="firstname"
          value={props.user.firstname}
        />
      </div>
      <div className="form-group">
        <label> Last Name</label>
        <input
          className="form-control"
          placeholder={"Enter Last Name"}
          id="lastname"
          label="lastname"
          onChange={props.onChange}
          onSubmit={props.onSubmit}
          name="lastname"
          value={props.user.firstname}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
