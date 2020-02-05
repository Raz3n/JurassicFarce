import React, { Component } from "react";
import VisitorTracker from "../components/VisitorTracker";

const SideBar = ({selectedPaddock, handleAddPaddock}) => {

  function addPaddock() {
    handleAddPaddock(selectedPaddock)
  }

  function activatedClass() {
    
    if (selectedPaddock.available) {
      return "hideAddButton"
    }

    else if(!selectedPaddock.available) {
      return "addPaddockButton"
    }
  }

  return (
    <div className="trackerContainer">
      <VisitorTracker />
      <p>{selectedPaddock.name}</p>
      <p>{selectedPaddock.capacity}</p>
      <p>{selectedPaddock.available}</p>
      <button className={activatedClass()} onClick={addPaddock} >Add Paddock</button>

    </div>
  );
};

export default SideBar;
