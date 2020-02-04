import React from 'react';

const FeedDino = ({ dinosaur, handleFeedDino }) => {

    function handleClick(e) {
        handleFeedDino(dinosaur)
    }
    return(
        <button onClick={handleClick}>+</button>
    )

}

export default FeedDino;