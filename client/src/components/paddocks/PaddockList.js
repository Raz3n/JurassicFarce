import React from 'react';
import Paddock from './Paddock';

const PaddockList = ({ paddocks }) => {

    if (paddocks.length === 0) {
        return (<p>Loading...</p>)
    }

    const paddocksList = paddocks.map((paddock, index) => {
        return (
            <li key={paddock.id} className='component-item'>
                    <Paddock paddock={paddock} />
            </li>
        )
    })

    return (
        <ul className='innerContainer component-list-paddock'>
         
                {paddocksList}
           
        </ul>
    )
}

export default PaddockList;