import React from 'react';
import Species from './Species';

const SpeciesList = ({ species }) => {

    if (species.length === 0) {
        return (<p>Loading...</p>)
    }

    const speciesList = species.map((species, index) => {
        return (
            <li key={index} className='component-item'>
                    <Species species={species} />
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