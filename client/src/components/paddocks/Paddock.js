<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
import SVG from 'react-inlinesvg';
>>>>>>> develop

const Paddock = ({ paddock, handleSelectedPaddock }) => {
  if (!paddock) {
    return "Loading";
  }

  function handleSelect(event) {
    handleSelectedPaddock(paddock);
  }

  return (
    <div className="paddockItem">
      <div className="paddockImageContainer" onClick={handleSelect}>
        <img src={paddock.pimage} className="paddockImg" />
      </div>

<<<<<<< HEAD
      <div className="paddockData">
        <div className="row01Data">
          <p>{paddock.name}</p>
          <p className="smText">PADDOCK 0{paddock.id}</p>
        </div>
        <div className="row02Data">
          <p>{paddock.capacity}</p>
          <p>{paddock.available}</p>
          <button></button>
=======
    return (

        <div className="paddockItem">
            <SVG src={paddock.pimage} className="paddockImg"/>
            <div className="paddockData">
                <div className="row01Data">
                     <p>{paddock.name}</p>
                     <p className="smText">PADDOCK 0{paddock.id}</p>
                  
                </div>
                <div className="row02Data">
                    <p>CAPACITY: 0{paddock.capacity}</p>
                     <div className="row02DataInner">
                        <p>ACTIVITY: {paddock.available}</p>
                        <div className="infoStatus" style={{background: "#4eef4e"}}></div>
                     </div>
                </div>
                 
            </div>
         
>>>>>>> develop
        </div>
      </div>
    </div>
  );
};

export default Paddock;
