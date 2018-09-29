import React, { Component } from "react";
import Img from "./Img";
import "./App.css";

class App extends Component {
  state = {
    file: null,
    error: null
  };

  uploadfile = e => {
    const validateImageRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;
    console.log(e.target.files[0]);
    if (validateImageRegex.test(e.target.files[0].name)) {
      this.setState({
        file: URL.createObjectURL(e.target.files[0])
      });
    } else {
      this.setState({
        error: "Invalid Image Type. Type must be .gif, jpg, jpeg, tiff, png"
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              <React.Fragment>
                {this.state.error ? (
                  <div>
                    <h4 className="display-4 alert alert-danger">{this.state.error}</h4>
                  </div>
                ) : !this.state.file ? (
                  <React.Fragment>
                    <input
                      className=""
                      type="file"
                      name="file"
                      id="file"
                      onChange={this.uploadfile}
                      style={{
                        width: "0px",
                        height: "0px",
                        opacity: "0",
                        overflow: "hidden",
                        position: "absolute",
                        zIndex: "-1"
                      }}
                    />
                    <label htmlFor="file" style={{ cursor: "pointer" }}>
                      <div className="d-flex justify-content-center">
                        <img
                          src="http://www.stickpng.com/assets/images/586ac158b6fc1117b60b275f.png"
                          style={{ height: "30px" }}
                          alt="upload-icon"
                        />
                      </div>
                      <p className="font-weight-bold m-3">Choose a File</p>
                    </label>
                  </React.Fragment>
                ) : (
                  <h4 className="font-weight-bold display-4 text-center">
                    Image Uploaded!
                  </h4>
                )}
                {this.state.file ? <Img file={this.state.file} /> : null}
                {this.state.file ? (
                  <button onClick={() => {
                    this.setState({file: null, error: null})
                  }} className="btn btn-success btn-block font-weight-bold mt-3">
                    Reset
                  </button>
                ) : null}
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
