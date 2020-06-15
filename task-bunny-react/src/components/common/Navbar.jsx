import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = { color: "#fffdd0", fontWeight: "bold" };
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <NavLink
          to="/home"
          className="nav-link"
          activeStyle={activeStyle}
          exact
        >
          Home
        </NavLink>
        <NavLink
          to="/categories"
          className="nav-link"
          activeStyle={activeStyle}
        >
          Tasks
        </NavLink>
        <NavLink
          className="nav-link"
          to="/client page"
          activeStyle={activeStyle}
        >
          Profile
        </NavLink>
        <NavLink to="/" className="nav-link" activeStyle={activeStyle} exact>
          Login
        </NavLink>
        <NavLink to="/" className="nav-link" activeStyle={activeStyle} exact>
          Logout
        </NavLink>
      </nav>
    </div>
  );
}

/* Conditionally render Profile links, since there are three. Get request to get role, then check that with profile link and then change link */