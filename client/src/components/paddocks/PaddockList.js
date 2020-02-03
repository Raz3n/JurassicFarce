import React from 'react';
import Paddock from './Paddock';

const PaddockList = ({ paddocks }) => {

    if (paddocks.length === 0) {
        return (<p>Loading...</p>)
    }

    const paddocksList = paddocks.map((paddock, index) => {
        return (
            <li key={index}>
                <div>
                    <Paddock paddock={paddock} />
                </div>
            </li>
        )
    })

    return (
        <ul>
            {paddocksList}
        </ul>
    )
}

export default PaddockList;