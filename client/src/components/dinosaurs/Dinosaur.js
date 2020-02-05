import React from 'react';
import EditDinosaur from './EditDinosaur';
import FeedDino from './FeedDino';


const Dinosaur = ({ dinosaur, paddocks, handleMoveDinosaur, handleFeedDino, handleDeleteDino }) => {

    if (!dinosaur) {
        return "Loading"
    }

    function dinoHunger() {
        const num =  (100 - ((dinosaur.stomach / dinosaur.species.stomachCapacity) * 100))
        return Math.round(num * 100) / 100
    }

    function deleteDino() {
        handleDeleteDino(dinosaur.id)
    }

    return (
        <div className="singleDinosaur">
            <div className="leftPanelSingleDino">
            <button className="killOne" onClick={deleteDino}>
            <img src="../gun.svg" alt="gun" /> <p>KILL </p></button>
            <img src={dinosaur.species.image} alt="dinosaur" className="dinoImage"/>
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
                <p>Hanger Level: {dinoHunger()}%</p>
                <FeedDino handleFeedDino={handleFeedDino} dinosaur={dinosaur}/>
            </div>
            
            
           

           </div>
        </div>
    )

}

export default Dinosaur;