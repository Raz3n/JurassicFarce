import React from 'react';

const EditDinosaur = ({ paddocks, dinosaur, handleMoveDinosaur }) => {

    const newPaddocks = paddocks.filter(paddock => {
        return paddock.name !== dinosaur.paddock.name
    })
    const paddockList = newPaddocks.map((paddock, index) => {
        return (
            <option key={index}
                value={paddock._links.self.href}>
                {paddock.name}
            </option>
        )
    }
    )

    function handleSelect(e) {
        handleMoveDinosaur(e.target.value, dinosaur.id);
    }

    return (
        // <form onSubmit={handleSelect}>
            <select onChange={handleSelect}>
                <option defaultValue={dinosaur.paddock}>
                    {dinosaur.paddock.name}
                </option>
                {paddockList}
            </select>
        //     <button value="submit">Move Dino</button>
        // </form>

    )
}

export default EditDinosaur; 