import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import serviceProviderImage from "../Assets/provider.jpg";
import Axios from "axios";
import JWTD from "jwt-decode";
import { Link } from "react-router-dom";

export default function ProviderPage() {
  const [providerID, setProviderID] = useState([]);
  const [earnings, setEarnings] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState([]);

  const token = localStorage.getItem("token");
  const username = JWTD(token).sub;

  useEffect(() => {
    Axios.get("http://13.58.157.19:8081/users/userByname/" + username, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => localStorage.setItem("PID", result.data))
      .catch((err) => console.log("error username:" + err));

    Axios.get(
      "http://13.58.157.19:8081/tasks/totalEarnings/" +
        localStorage.getItem("PID"),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((result) => setEarnings(result.data))
      .catch((err) => console.log("error totalearnings:" + err));

    Axios.get(
      "http://13.58.157.19:8081/tasks/totaltasks/" +
        localStorage.getItem("PID"),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((result) => setTasks(result.data))
      .catch((err) => console.log("error totaltasks:" + err));
  }, []);

  function RenderRole() {
    if (localStorage.getItem("role") === "ROLE_PROVIDER") {
      return <h5 className="card-title">{username.split("@")[0]}</h5>;
    }
  }
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="display-4">Service Provider Profile</div>

        <div className="row">
          <div className="col-3">
            <div
              className="card m-2"
              style={{ width: "250px", height: "500px" }}
            >
              <img
                className="card-img-top"
                src={serviceProviderImage}
                alt="Service Provider Profile Pic"
                style={{ height: "300px", width: "250px" }}
              />
              <div className="card-body">
                {RenderRole()}
                <p className="card-text">
                  I'm a professional laundry man, with 15 years of experience in
                  laundry services.
                </p>
                <span className="badge badge-success"> Rating : 5.0</span>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <ul className="list-group m-2">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Total Task Completed
                <span className="badge badge-primary badge-pill">{tasks}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Total Money Earned
                <span className="badge badge-primary badge-pill">
                  ${earnings}
                </span>
              </li>
              <Link to="/provider tasks">
                <div className="text-center">
                  <button type="button" className="btn btn-info m-2">
                    View Task
                  </button>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
