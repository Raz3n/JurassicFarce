import React from 'react';


const Paddock = ({ paddock }) => {

    if (!paddock) {
        return "Loading"
    }

    return (
        <div>
            
            {paddock.name}
        </div>
    )
}

export default Paddock;