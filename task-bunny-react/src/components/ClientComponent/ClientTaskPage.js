import React, { Component } from "react";
const divStyle = {
  width: "100%",
  height: "100%",
  // backgroundImage: `url(${bgtask})`,
  backgroundSize: "cover",
};

export default class ClientTaskPage extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    fetch("http://13.58.157.19:8081/tasks")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          tasks: data,
        });
      })
      .catch((err) => console.log(err));
  }

  changeDone() {
    console.log();
  }
  render() {
    return (
      <div style={divStyle}>
        <div style={{ width: "80%", margin: "auto" }}>
          <h1 style={{ marginBottom: "2%", marginTop: "2%" }}>My Task List</h1>
          <table
            id="dtBasicExample"
            className="table table-light table-bordered table-md"
            cellSpacing="0"
            width="100%"
          >
            <thead className="thead-dark">
              <tr>
                <th className="th-lg">Task Id</th>
                <th className="th-lg">Task Name</th>
                <th className="th-lg">Task Category</th>
                <th className="th-lg">Status</th>
                <th className="th-lg">Price</th>
                <th className="th-lg">Provider</th>
                <th className="th-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>420</td>
                <td>My Laundry</td>
                <td>Laundy</td>
                <td>In progress</td>
                <td>10</td>
                if statement if not completed then it would display something
                <td>
                  <button className="btn btn-danger">Cancel Request</button>
                  <button className="btn btn-success">Done </button>
                </td>
              </tr> */}
              {this.state.tasks.map((task) => {
                if (task.status === "pending") {
                  return (
                    <tr key={task.taskid}>
                      <td>{task.taskid}</td>
                      <td>{task.name}</td>
                      <td>{task.category}</td>
                      <td>{task.status}</td>
                      <td>{task.amountpaid}</td>
                      <td>{task.providerid}</td>
                      <td>
                        <button className="btn btn-danger">Cancel</button>
                        <button
                          className="btn btn-success"
                          onClick={this.changeDone}
                        >
                          Done{" "}
                        </button>
                      </td>
                    </tr>
                  );
                } else if (task.status === "done") {
                  return (
                    <tr key={task.taskid}>
                      <td>{task.taskid}</td>
                      <td>{task.name}</td>
                      <td>{task.category}</td>
                      <td>{task.status}</td>
                      <td>{task.amountpaid}</td>
                      <td>{task.providerid}</td>
                      <td>Complete</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
