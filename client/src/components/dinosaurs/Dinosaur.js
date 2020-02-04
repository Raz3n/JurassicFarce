import React, { Fragment } from 'react';
import EditDinosaur from './EditDinosaur';
import FeedDino from './FeedDino';


const Dinosaur = ({ dinosaur, paddocks, handleMoveDinosaur, handleFeedDino }) => {

    if (!dinosaur) {
        return "Loading"
    }

    return (
        <div className="singleDinosaur">
            <div className="leftPanelSingleDino">
            <img src={dinosaur.species.image} className="dinoImage"/>
            </div>
           <div className="rightPanelSingleDino">
            <h4>{dinosaur.name}</h4>
           
            <div className="paddockSingleDino">
                <p>PADDOCK:</p>
                <EditDinosaur paddocks={paddocks} dinosaur={dinosaur} handleMoveDinosaur={handleMoveDinosaur} />
            </div>
          
            <p>{dinosaur.species.type}</p>
            <p>{dinosaur.species.diet}</p>
            <div className="feedingBox">
                <p>{dinosaur.stomach}</p>
                <FeedDino handleFeedDino={handleFeedDino} dinosaur={dinosaur}/>
            </div>
           </div>
        </div>
    )

}

export default Dinosaur;