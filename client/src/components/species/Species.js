import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Species = ({species}) => {

    if(!species) {
        return "Loading"
    }

    // const url = `/species/${species.id}`

    return (
        <Fragment>
            
                <p>{species.type}</p>
                <p>{species.diet}</p>
                <p>{species.image}</p>
           
        </Fragment>
    )
}

export default Species;