import React, { Component } from "react";
const divStyle = {
  width: "100%",
  height: "800px",
  // backgroundImage: `url(${img3})`,
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
          <div className="card-header" style={{ backgroundColor: "#CCA483" }}>
            <h3 className="mb-0">Coffee Creator</h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={this.submitHandler}>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Coffee name
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="coffee_name"
                    value="sample"
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Shots of Espresso
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="shots_of_espresso"
                    value="sample"
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Type of Container
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="container"
                    value="Sample"
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Total Calories
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="total_calories"
                    value="sample"
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Contains Milk
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    className="form-control"
                    name="contains_milk"
                    value="sample"
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Price $
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="price"
                    value="sample"
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label"></label>
                <div className="col-lg-6">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg"
                    style={{ display: "inline-block", width: "50%" }}
                  >
                    Create
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
