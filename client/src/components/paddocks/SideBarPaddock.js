import React from 'react';

const SideBarPaddock = ({ selectedPaddock, handleAddPaddock}) => {

    function addPaddock(e) {
        handleAddPaddock(selectedPaddock)
      }
    

  
    return (
        <div className="add-paddock-container">
        <p>{selectedPaddock.name}</p>
        <p>{selectedPaddock.capacity}</p> 
        <button className="paddockButton" onClick={addPaddock} >Add Paddock</button>
  
        </div>

    );
  };





export default SideBarPaddock;

