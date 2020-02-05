import React from 'react';

const SideBarPaddock = ({selectedPaddock, handleAddPaddock}) => {

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
        <div>
        <p>{selectedPaddock.name}</p>
        <p>{selectedPaddock.capacity}</p>
        <button className={activatedClass()} onClick={addPaddock} >Add Paddock</button>
  
        </div>

    );
  };





export default SideBarPaddock;

