import React, { Fragment } from 'react';
import EditDinosaur from './EditDinosaur';


const Dinosaur = ({ dinosaur, paddocks, handleMoveDinosaur, dinoIndex }) => {

    if (!dinosaur) {
        return "Loading"
    }

    return (
        <div className="singleDinosaur">
            <div className="leftPanelSingleDino">
            <img src={dinosaur.species.image} className="dinoImage"/>
            </div>
           <div className="rightPanelSingleDino">
            <h4>{dinosaur.name}</h4>
           
            <div className="paddockSingleDino">
                <p>PADDOCK:</p>
                <EditDinosaur paddocks={paddocks} dinosaur={dinosaur} />
            </div>
          
            <p>{dinosaur.species.type}</p>
            <p>{dinosaur.species.diet}</p>
            
            <button></button>

           </div>
           
        </div>
    )
}

export default Dinosaur;