import React, { Component } from "react";
const divStyle = {
  width: "100%",
  height: "100%",
  // backgroundImage: `url(${bgtask})`,
  backgroundSize: "cover",
};

export default class ClientTaskPage extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1 style={{ marginBottom: "2%", marginTop: "2%" }}>
          Client Task List : To be removed
        </h1>
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
                <th className="th-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>420</td>
                <td>My Laundry</td>
                <td>Laundy</td>
                <td>In progress</td>
                <td>10</td>
                {/* if statement if not completed then it would display something */}
                <td>
                  <button className="btn btn-danger">Cancel Request</button>
                  <button className="btn btn-success">Done </button>
                </td>
              </tr>
              {/* {this.state.coffees.map((coffee) => {
                return (
                  <tr key={coffee.id}>
                    <td>{coffee.id}</td>
                    <td>{coffee.coffee_name}</td>
                    <td>{coffee.shots_of_espresso}</td>
                    <td>{coffee.container}</td>
                    <td>{coffee.total_calories}</td>
                    <td>{coffee.price}</td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
