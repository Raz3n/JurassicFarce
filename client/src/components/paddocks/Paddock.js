import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Paddock = ({ paddock }) => {

    if (!paddock) {
        return "Loading"
    }

    return (
        <Fragment>
            {paddock.name}
        </Fragment>
    )
}

export default Paddock;