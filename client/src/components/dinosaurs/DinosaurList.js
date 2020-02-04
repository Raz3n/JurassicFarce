import React from 'react';
import Dinosaur from './Dinosaur';


const DinosaurList = (props) => {

    function compare(a, b) {
        let comparison = 0
        if(a.name > b.name) {
            comparison = 1;
        } else if (a.name < b.name) {
            comparison = -1;
        }
        return comparison;
    }

    const newDinos = props.dinosaurs.sort(compare);

    const dinoList = newDinos.map((dinosaur, index) => {
        return (
            <li key={index} className='component-item'>
                <Dinosaur dinoIndex={index} dinosaur={dinosaur} paddocks={props.paddocks} 
                handleMoveDinosaur={props.handleMoveDinosaur}
                handleFeedDino={props.handleFeedDino}/>
            </li>
        )
    })

    return (
        <ul className='component-list innerContainer listDinosaurs'>
            {dinoList}
        </ul>
    )
}

export default DinosaurList;