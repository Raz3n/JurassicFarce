import React from 'react';
import Dinosaur from './Dinosaur';


const DinosaurList = (props) => {


    const dinosaurs = props.dinosaurs.map((dinosaur, index) => {
        return (
            <li key={index} className='component-item'>
                <Dinosaur dinosaur={dinosaur} paddocks={props.paddocks} />
            </li>
        )
    })

    return (
        <ul className='component-list innerContainer listDinosaurs'>
            {dinosaurs}
        </ul>
    )
}

export default DinosaurList;