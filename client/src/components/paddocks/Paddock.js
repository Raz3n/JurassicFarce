import React from 'react';


const Paddock = ({paddock, handleSelectedPaddock}) => {

    if (!paddock) {
        return "Loading"
    }

    function handleSelect(event) {
        handleSelectedPaddock(paddock)
    }

    return (

        <div className="paddockItem">
            <div className="paddockImageContainer" onClick={handleSelect}>
                 <img src={paddock.pimage} className="paddockImg"/>
            </div>
           
            <div className="paddockData">
                <div className="row01Data">
                     <p>{paddock.name}</p>
                     <p className="smText">PADDOCK 0{paddock.id}</p>
                  
                </div>
                <div className="row02Data">
                    <p>{paddock.capacity}</p>
                     <p>{paddock.available}</p>
                     <button></button>
                </div>
                 
            </div>
         
        </div>
    )
}

export default Paddock;