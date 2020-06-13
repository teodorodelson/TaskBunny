import React, { Component } from "react";
import bg_task from "../ClientComponent/bg_task.jpg";

const left = {
  height: "100%",
  width: "30%",
  position: "fixed",
  zIndex: "1",
  top: "0",
  overflowX: "hidden",
  paddingTop: "20px",
  left: "0",
  // backgroundColor: "#111",
  margin: "auto",
};

const right = {
  height: "100%",
  width: "70%",
  position: "fixed",
  zIndex: "1",
  top: "0",
  overflowX: "hidden",
  paddingTop: "20px",
  right: "0",
  // backgroundColor: "blue",
};
const divStyle = {
  width: "100%",
  height: "100%",
  // backgroundImage: `url(${bgtask})`,
  backgroundSize: "cover",
};

export default class ClientFeedback extends Component {
  render() {
    return (
      <div>
        <div style={left}>
          <div style={{ marginTop: "5%" }}>
            <h3>Client Feedback Page</h3>
            <div className="card" style={{ width: "18rem" }}>
              <img src={bg_task} alt="..." className=" card-img-top "></img>
              <div className="card-body">
                <p className="card-text">Name of Provider</p>
                {/* <div class="card-header">Featured</div> */}
              </div>
            </div>
          </div>
        </div>

        <div style={right}>
          <h3>Request form</h3>
          <div style={divStyle}>
            <div
              className="card card-outline-secondary"
              style={{ width: "70%", margin: "auto", marginTop: "3%" }}
            >
              <div className="card-header" style={{ backgroundColor: "cream" }}>
                <h3 className="mb-0" style={{ textAlign: "center" }}>
                  Rate your experience with this provider
                </h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={this.submitHandler}>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      Comments and Feedbacks
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
                  <small textAlign="center">
                    Rating: 5 is the highest rating and 1 is the lowest
                  </small>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      Rating
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control"
                        type="number"
                        max="5"
                        min="1"
                        name="total_calories"
                        // value=""
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
                        Post Feedback
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
