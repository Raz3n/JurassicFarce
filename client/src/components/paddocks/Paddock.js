import React, { Fragment } from 'react';


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