import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function providerPage() {
  return (
    <React.Fragment>
      <div class="container-fluid">
        <div className="display-4">Provider Pending Tasks</div>
        <div class="row">
          <div class="col-lg">
            <ul class="list-group m-2">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Pick my laundry
                <span class="badge badge-primary badge-pill">Urgent</span>
                <button type="button" class="btn btn-outline-danger">
                  Done
                </button>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Take my dog for a walk
                <span class="badge badge-primary badge-pill">less urgent</span>
                <button type="button" class="btn btn-outline-danger">
                  Done
                </button>
              </li>
            </ul>
          </div>
          <div class="col-sm"></div>
          <div class="col-sm"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
