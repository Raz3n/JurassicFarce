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
        <p>Visitor Count:{this.state.visitorCount}</p>
        <p>Days since last incident: 0</p>
      </div>
    );
  }
}

export default VisitorTracker;
