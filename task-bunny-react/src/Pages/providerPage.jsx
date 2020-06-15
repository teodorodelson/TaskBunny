import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import serviceProviderImage from "../Assets/ServiceProvider.jpg";
import Axios from "axios";

export default function ProviderPage() {
  const [earnings, setEarnings] = useState("");
  const [tasks, setTasks] = useState("");

  const providerid = 3;

  Axios.get(
    "http://13.58.157.19:8081/tasks/totalEarnings/" + providerid
  ).then((result) => setEarnings(result.data));

  Axios.get("http://13.58.157.19:8081/tasks/totalEarnings/2").then((result) =>
    setTasks(result.data)
  );

  return (
    <React.Fragment>
      <div class="container-fluid">
        <div className="display-4">Service Provider Profile</div>
        <div class="row">
          <div class="col-3">
            <div class="card m-2" style={{ width: "250px", height: "500px" }}>
              <img
                class="card-img-top"
                src={serviceProviderImage}
                alt="Service Provider Profile Pic"
                style={{ height: "300px", width: "250px" }}
              />
              <div class="card-body">
                <h5 class="card-title">William O.</h5>
                <p class="card-text">
                  I'm a professional laundry man, with 15 years of experience in
                  laundry services.
                </p>
                <span class="badge badge-success"> Rating : 5.0</span>
              </div>
            </div>
          </div>
          <div class="col-md">
            <ul class="list-group m-2">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Total Task Completed
                <span class="badge badge-primary badge-pill">{tasks}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Total Money Earned
                <span class="badge badge-primary badge-pill">${earnings}</span>
              </li>
            </ul>
            <button type="button" class="btn btn-success m-2 float-right">
              Transfer Money
            </button>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
