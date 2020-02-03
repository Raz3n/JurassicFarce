import React from 'react';

const EditDinosaur = ({ paddocks =[]  }) => {

    const paddockList = paddocks.map((paddock, index) => {
        return (
            <option key={index}>{paddock.name}</option>
        )
    })
    return (
        
        <select>
            {paddockList}
        </select>
       
    )
}

export default EditDinosaur; 