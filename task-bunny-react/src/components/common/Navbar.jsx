<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> a84ecda136f1c306fcae5867bad7a0ffb78e75dd
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const role = localStorage.getItem("role");
  const greeting = `Welcome ${role}`;
  const activeStyle = { color: "#fffdd0", fontWeight: "bold" };

<<<<<<< HEAD
=======
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    //console.log("Token", localStorage.getItem("token"));
    if (localStorage.getItem("token") !== null) {
      setLoggedIn(true);
    }
  }, isLoggedIn);

  function handleClick(e) {
    localStorage.removeItem("token");
    toast.success("Logout Successful");
    setLoggedIn(false);
  }

  function renderLogin() {
    if (isLoggedIn) {
      return (
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
          <NavLink
            to="/"
            className="nav-link"
            activeStyle={activeStyle}
            onClick={handleClick}
            exact
          >
            Logout
          </NavLink>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-dark bg-dark">
          <NavLink
            to="/"
            className="nav-link"
            activeStyle={activeStyle}
            onClick={handleClick}
            exact
          >
            Login
          </NavLink>
        </nav>
      );
    }
  }

>>>>>>> a84ecda136f1c306fcae5867bad7a0ffb78e75dd
  return (
    <div>
      {/* <nav className="navbar navbar-dark bg-dark"> */}
      {/* <NavLink
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
<<<<<<< HEAD

        <NavLink className="nav-link" to={role} activeStyle={activeStyle}>
          {greeting}
        </NavLink>

        <NavLink to="/" className="nav-link" activeStyle={activeStyle} exact>
=======
        <NavLink
          className="nav-link"
          to="/client page"
          activeStyle={activeStyle}
        >
          Profile
        </NavLink> */}
      {renderLogin()}
      {/* <NavLink to="/" className="nav-link" activeStyle={activeStyle} exact>
>>>>>>> a84ecda136f1c306fcae5867bad7a0ffb78e75dd
          Login
        </NavLink>
        <NavLink to="/" className="nav-link" activeStyle={activeStyle} exact>
          Logout
        </NavLink> */}
      {/* </nav> */}
    </div>
  );
}

/* Conditionally render Profile links, since there are three. Get request to get role, then check that with profile link and then change link */
