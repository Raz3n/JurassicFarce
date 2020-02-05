import React, { Component } from "react";
import VisitorTracker from "../components/VisitorTracker";

const SideBar = ({selectedPaddock, handleAddPaddock}) => {

  function addPaddock(e) {
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
<<<<<<< HEAD
    
  </div>
  )
=======
      <p>{selectedPaddock.name}</p>
      <p>{selectedPaddock.capacity}</p>
      <button className={activatedClass()} onClick={addPaddock} >Add Paddock</button>

    </div>
  );
>>>>>>> develop
};

export default SideBar;
