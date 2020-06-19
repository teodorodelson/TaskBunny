import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import JWTD from "jwt-decode";
import { withRouter } from "react-router-dom";

function ProviderPage(props) {
  const [task, setTask] = useState([]);
  //const [id, setID] = useState([]);

  const token = localStorage.getItem("token");
  const username = JWTD(token).sub;

  useEffect(() => {
    Axios.get("http://13.58.157.19:8081/users/providerTasks/" + username, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => setTask(result.data))
      .catch((err) => console.log("error username:" + err));
  }, []);

  function whenDone(name) {
    Axios.get("http://13.58.157.19:8081/users/" + name.clientid, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log(result.data.username);
        props.history.push({
          pathname: "/feedback",
          state: { username: result.data.username },
        });
      })
      .catch((err) => console.log("error username:" + err));
  }
  //console.log(typeof task[0]);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="display-4">Pending Tasks</div>
        <div className="row">
          <div className="col-lg">
            <ul className="list-group m-2">
              {task.map((name, index) => {
                if (name.status === "done") {
                  return (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {name.name}
                      <span className="badge badge-info badge-pill">
                        Category : {name.category}
                      </span>
                      <span className="badge badge-success badge-pill">
                        Status : {name.status}
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => whenDone(name)}
                      >
                        Feedback
                      </button>
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {name.name}
                      <span className="badge badge-info badge-pill">
                        Category : {name.category}
                      </span>
                      <span className="badge badge-secondary badge-pill">
                        Status : {name.status}
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-danger disabled"
                      >
                        Feedback
                      </button>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(ProviderPage);
