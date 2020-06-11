import React, { Component } from "react";
import bgtask from "./bg_task.jpg";
const divStyle = {
  width: "100%",
  height: "100%",
  // backgroundImage: `url(${bgtask})`,
  backgroundSize: "cover",
};

export default class Clienttask extends Component {
  render() {
    return (
      <div style={divStyle}>
        <div
          className="card card-outline-secondary"
          style={{ width: "50%", margin: "auto", marginTop: "3%" }}
        >
          <div className="card-header" style={{ backgroundColor: "cream" }}>
            <h3 className="mb-0" style={{ textAlign: "center" }}>
              Task Bunny Creator
            </h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={this.submitHandler}>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Task name
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="coffee_name"
                    value=""
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Category
                </label>
                <div className="col-lg-9">
                  <select class="form-control">
                    <option>Laundry</option>
                    <option>House</option>
                    <option>Gardening</option>
                    <option>Others</option>
                  </select>
                  {/* <input
                    className="form-control"
                    type="text"
                    name="shots_of_espresso"
                    value="sample"
                    onChange={this.changeHanlder}
                    required
                  /> */}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Task Description
                </label>
                <div className="col-lg-9">
                  <textarea className="form-control" rows="5"></textarea>
                  {/* <input
                    className="form-control"
                    type="text"
                    name="container"
                    value="Sample"
                    onChange={this.changeHanlder}
                    required
                  /> */}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Total Pay $
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="total_calories"
                    value="0"
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label"></label>
                <div className="col-lg-6" style={{ margin: "auto" }}>
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg"
                    style={{ margin: "auto", width: "50%" }}
                  >
                    Post Task
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
