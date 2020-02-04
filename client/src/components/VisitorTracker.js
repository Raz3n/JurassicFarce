import React, { Component } from "react";

class VisitorTracker extends Component {
  constructor() {
    super();
    this.state = {
      visitorCount: 300
    };
    this.addVisitors = this.addVisitors.bind(this)
  }

componentDidMount() {
  setInterval(() => this.addVisitors(), 4000)
}

addVisitors() {

  this.setState(state => ({
    visitorCount: state.visitorCount + Math.floor(Math.random() * (10 - 1) + 1)
}))
}
  render() {
    return (
      <div className="topTracker">
        <p>Visitor Count: {this.state.visitorCount}</p>
        <p>Days since last incident: 0</p>
      </div>
    );
  }
}

export default VisitorTracker;
