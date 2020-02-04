import React from 'react';
import Species from './Species';

const SpeciesList = ({ species, handleSelectedSpecies }) => {

    if (species.length === 0) {
        return (<p>Loading...</p>)
    }

    const speciesList = species.map((specie, index) => {
        return (
            <li key={index} className='component-item'>
                    <Species species={specie} handleSelectedSpecies={handleSelectedSpecies} />
            </li>
        )
    })

    return (
        <ul className='component-list'>
            {speciesList}
        </ul>


 
    )
}

export default SpeciesList;