import React, { Component } from "react";
import VisitorTracker from "../components/VisitorTracker";
import Paddock from "../components/paddocks/Paddock";

class SideBar extends Component {

  render() {
  return (
  <div className="trackerContainer">
      <VisitorTracker />
      
      <Paddock />
  </div>
  )}
};

export default SideBar;
