import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Species = ({species, handleSelectedSpecies}) => {

    if(!species) {
        return "Loading"
    }

    function handleSelect() {
        handleSelectedSpecies(species)
    }

    return (
        
        <div onClick={handleSelect}>
            
                <p>{species.type}</p>
                <p>{species.diet}</p>
                <p>{species.image}</p>
           
        </div>
    )
}

export default Species;