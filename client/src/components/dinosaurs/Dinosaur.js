import React, { Fragment } from 'react';
import EditDinosaur from './EditDinosaur';


const Dinosaur = ({ dinosaur, paddocks, handleMoveDinosaur, dinoIndex }) => {

    if (!dinosaur) {
        return "Loading"
    }

    return (
        <Fragment>
            <h4>{dinosaur.name}</h4>
            <img src={dinosaur.species.image} alt={dinosaur.species.name}/>
            <p>{dinosaur.paddock.name}</p>
            <p>{dinosaur.species.type}</p>
            <p>{dinosaur.species.diet}</p>
            <EditDinosaur dinoIndex={dinoIndex} paddocks={paddocks} dinosaur={dinosaur} handleMoveDinosaur={handleMoveDinosaur}/>
        </Fragment>
    )
}

export default Dinosaur;