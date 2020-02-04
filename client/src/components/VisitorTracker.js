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
        <div className="buttonTracker">
          <h2>PARK</h2>
          <button className="killAll">
            <img src="../gun.svg"/> <p>KILL ALL </p></button>
        </div>
       
        <p><span>Visitor Count:</span>{this.state.visitorCount}</p>
        <p><span>Days since last incident:</span> 0</p>
      </div>
    );
  }
}

export default VisitorTracker;
