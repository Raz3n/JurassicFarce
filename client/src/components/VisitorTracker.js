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
      <div>
        <h4>Visitor Count:{this.state.visitorCount}</h4>
        <h4>Days since last incident: 0</h4>
      </div>
    );
  }
}

export default VisitorTracker;
