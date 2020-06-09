import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientProfilePic from "../Assets/AgentProfilePic.png";

export default function providerPage() {
  return (
    <React.Fragment>
      <div class="container-fluid">
        <div className="display-4">Client Profile</div>
        <div class="row">
          <div class="col-3">
            <div class="card m-2" style={{ width: "250px", height: "500px" }}>
              <img
                class="card-img-top"
                src={ClientProfilePic}
                alt="Service Provider Profile Pic"
                style={{ height: "300px", width: "250px" }}
              />
              <div class="card-body">
                <h5 class="card-title">Kevin</h5>
                <p class="card-text">
                  I need a trusted service provider to delegate my work.
                </p>
                <span class="badge badge-success"> Rating : 5.0</span>
              </div>
            </div>
          </div>
          <div class="col-md">
            <ul class="list-group m-2">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Pick my laundry
                <span class="badge badge-primary badge-pill">Urgent</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Take my dog for a walk
                <span class="badge badge-primary badge-pill">less urgent</span>
              </li>
            </ul>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
