import React, { Component } from "react";
import VisitorTracker from "../components/VisitorTracker";

const SideBar = ({selectedPaddock}) => {
  return (
    <div className="trackerContainer">
      <VisitorTracker />
      <p>{selectedPaddock.name}</p>
      <p>{selectedPaddock.capacity}</p>


    </div>
  );
};

export default SideBar;
