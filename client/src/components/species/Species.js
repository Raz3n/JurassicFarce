import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Species = ({species, handleSelectedSpecies}) => {

    if(!species) {
        return "Loading"
    }

    function handleSelect(e) {
        handleSelectedSpecies(species)
    }

    return (
        
        <div onClick={handleSelect}>
            
                <p>{species.type}</p>
                <p>{species.diet}</p>
                <img src={species.image} alt={species.type}/>
           
        </div>
    )
}

export default Species;