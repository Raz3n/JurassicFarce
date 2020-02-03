import React from 'react';
import Paddock from './Paddock';
import { Link } from 'react-router-dom';

const PaddockItem = ({ paddock }) => {
    if (!Paddock) {
        return "...loading paddocks"
    }


    const dinosaurs = paddock.dinosaurs.map((dinosaur, index) => {
        return <li key={index}><a href={`/dinosaurs/${dinosaur.id}`}></a></li>
    })

    return (
        <div className='component'>
            <p>{paddock.name}</p>
            <p> Dinosaurs: </p>
            <ul>
                {dinosaurs}
            </ul>
        </div>
    )

}
export default PaddockItem; 
