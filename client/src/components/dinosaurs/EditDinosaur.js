import React from 'react';

const EditDinosaur = ({ paddocks, dinosaur }) => {

    const newPaddocks = paddocks.filter(paddock => {
        return paddock.name !== dinosaur.paddock.name
    })
    const paddockList = newPaddocks.map((paddock) => {
        return (
            <>
                <option key={paddock.id}>{paddock.name}</option>
            </>
        )
    }
    )

    return (

        <select>
            <option selected={dinosaur.paddock.name}>{dinosaur.paddock.name}</option>
            {paddockList}
        </select>

    )
}

export default EditDinosaur; 