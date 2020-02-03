import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Dinosaur = ({dinosaur}) => {

    if(!dinosaur) {
        return "Loading"
    }

    const url = `/dinosaurs/${dinosaur.id}`
    return (
        <Fragment>
            <img src={dinosaur.species.image} />
            <Link to={url}>
                {dinosaur.name}
            </Link>
        </Fragment>
    )
}

export default Dinosaur;