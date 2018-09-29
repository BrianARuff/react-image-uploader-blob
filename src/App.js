import React, { Component } from "react";
import Img from './Img';
import "./App.css";

class App extends Component {
  state = {
    image: null,
  };

  uploadImage = (e) => {
    console.log(e.target.files[0]);
    this.setState({
      image: URL.createObjectURL(e.target.files[0])
    })
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="m-5 d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
              <div style={{width: '300px'}}>
              {
                !this.state.image ? <input
                className=""
                type="file"
                name="image"
                onChange={this.uploadImage}
              /> :
              <h4 className="font-weight-bold display-4 text-center">Uploaded!</h4>
              }
              {
                this.state.image ? <Img image={this.state.image} /> : null
              }
              {
                this.state.image ? <button className="btn btn-success btn-block font-weight-bold m-3">Submit</button> : null
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
