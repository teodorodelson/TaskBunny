import React from "react";

export default function AdminUser(props) {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Password</th>
          <th>Role</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date Joined</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => {
          return (
            <tr key={user.userid}>
              <td>{user.userid}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.datejoined}</td>
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
