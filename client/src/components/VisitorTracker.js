import React, { Component } from "react";

class VisitorTracker extends Component {
  constructor() {
    super();
    this.state = {
      visitorCount: 500
    };
  }
  render() {
    return (
      <div className="topTracker">
        <div className="buttonTracker">
          <h2>PARK</h2>
          <button className="killAll">
            <img src="../gun.svg"/> <p>KILL ALL </p></button>
        </div>
       
        <p><span>Visitor Count:</span>{this.state.visitorCount}</p>
        <p><span>Days since last incident:</span> 62</p>
      </div>
    );
  }
}

export default VisitorTracker;
