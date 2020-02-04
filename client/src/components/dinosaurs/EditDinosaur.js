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
        e.preventDefault()
        handleMoveDinosaur(e.target.value, dinosaur.id);
    }



    function filterPaddocks() {

         
        const isHerbFriendly = dinosaur.species.diet === "Herbivore"

        return paddocks
            .filter(paddock => {
                return paddock.name !== dinosaur.paddock.name && paddock.herbFriendly === isHerbFriendly
            })
    
            .map((paddock, index) => {
                return (
                    <option key={index}
                        value={paddock._links.self.href}>
                        {paddock.name}
                    </option>
                )
            })
    }



    return (
            <select onChange={handleSelect}>
                <option defaultValue={dinosaur.paddock}>
                    {dinosaur.paddock.name}
                </option>
                {filterPaddocks()}
            </select>
    )
}

export default EditDinosaur; 