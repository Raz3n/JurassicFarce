import React from 'react';
import Dinosaur from './Dinosaur';


const DinosaurList = (props) => {


    const dinosaurs = props.dinosaurs.map((dinosaur, index) => {
        return (
            <li key={index} className='component-item'>
                <Dinosaur dinoIndex={index} dinosaur={dinosaur} paddocks={props.paddocks} handleMoveDinosaur={props.handleMoveDinosaur}/>
            </li>
        )
    })

    return (
        <ul className='component-list'>
            {dinosaurs}
        </ul>
    )
}

export default DinosaurList;