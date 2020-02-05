import React from 'react';

const EditDinosaur = ({ paddocks, dinosaur, handleMoveDinosaur }) => {

    function handleSelect(e) {
        e.preventDefault()
        handleMoveDinosaur(e.target.value, dinosaur.id);
    }

    function filterPaddocks() {

        const isHerbFriendly = dinosaur.species.diet === "Herbivore"

        return paddocks
            .filter(paddock => {
                return paddock.herbFriendly === isHerbFriendly &&
                    paddock.capacity > paddock.dinosaurs.length
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