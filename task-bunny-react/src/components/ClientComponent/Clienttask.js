import React, { Component } from "react";
import bgtask from "./bg_task.jpg";
import axios from "axios";
const divStyle = {
  width: "100%",
  height: "100%",
  // backgroundImage: `url(${bgtask})`,
  backgroundSize: "cover",
};

export default class Clienttask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "",
      description: "",
      status: "done",
      amountpaid: 0,
      clientid: 13,
      providerid: 0,
      // taskid: 9,
    };
  }

  changeHanlder = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("http://13.58.157.19:8081/tasks", this.state)
      .then((response) => {
        console.log(response);
        // toast.success("Coffee Successfully Created");
        // this.props.history.push("/coffee");
      })
      .catch((err) => {
        console.log("Somethings wrong");
        console.log(err);
      });
  };
  // http://13.58.157.19:8081/tasks"
  render() {
    const { name, category, description, amountpaid } = this.state;
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
                    name="name"
                    value={name}
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
                  <select
                    className="form-control"
                    value={category}
                    name="category"
                    onChange={this.changeHanlder}
                  >
                    <option value="Laundry">Laundry</option>
                    <option value="House">House</option>
                    <option value="Gardening">Gardening</option>
                    <option value="Others">Others</option>
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
                  <textarea
                    className="form-control"
                    rows="5"
                    name="description"
                    value={description}
                    onChange={this.changeHanlder}
                  ></textarea>
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
                    name="amountpaid"
                    value={amountpaid}
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
