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
<<<<<<< HEAD
                <EditDinosaur paddocks={paddocks} dinosaur={dinosaur} 
                handleMoveDinosaur={handleMoveDinosaur}/>
=======
                <EditDinosaur paddocks={paddocks} dinosaur={dinosaur}
                handleMoveDinosaur={handleMoveDinosaur} />
>>>>>>> f5e44cf19107e0333c0f53daae6953f483bc9a1b
            </div>
          
            <p>{dinosaur.species.type}</p>
            <p>{dinosaur.species.diet}</p>
            
            <button></button>

           </div>
           
        </div>
    )
}

export default Dinosaur;