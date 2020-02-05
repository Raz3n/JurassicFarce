import React from "react";
import EditDinosaur from "./EditDinosaur";
import FeedDino from "./FeedDino";

const Dinosaur = ({
  dinosaur,
  paddocks,
  handleMoveDinosaur,
  handleFeedDino,
  handleDeleteDino
}) => {
  if (!dinosaur) {
    return "Loading";
  }

  function dinoHunger() {
    const num =
      100 - (dinosaur.stomach / dinosaur.species.stomachCapacity) * 100;
    return Math.round(num * 100) / 100;
  }

  const style01 = {
    backgroundColor: "hsl(" + dinoHunger() + ", 100%, 50%)"
  };

  function deleteDino() {
    handleDeleteDino(dinosaur.id);
  }

  return (
    <div className="singleDinosaur">
      <button className="killOne" onClick={deleteDino}>
        <img src="../gun.svg" /> <p>KILL </p>
      </button>
      <div className="leftPanelSingleDino">
        <img src={dinosaur.species.image} className="dinoImage" />
      </div>
      <div className="rightPanelSingleDino">
        <h4>{dinosaur.name}</h4>

        <div className="paddockSingleDino">
          <p>
            PADDOCK: <span className="dinoName">{dinosaur.paddock.name}</span>
          </p>
          <EditDinosaur
            paddocks={paddocks}
            dinosaur={dinosaur}
            handleMoveDinosaur={handleMoveDinosaur}
          />
        </div>

        <p>{dinosaur.species.type}</p>
        <p>{dinosaur.species.diet}</p>
        <div className="feedingBox">
          <p>Hanger Level: {dinoHunger()}%</p>
          <FeedDino handleFeedDino={handleFeedDino} dinosaur={dinosaur} />
        </div>
      </div>
      <div className="hungerlevelPanelSingleDino">
        <div
          className="percentLevel"
          style={{
            height: dinoHunger() + "%",
            backgroundColor: "hsl(" + (100 - dinoHunger()) + ", 100%, 50%)"
          }}
        ></div>
        <div
          className="percentLevel blurLevel"
          style={{
            height: dinoHunger() + "%",
            backgroundColor: "hsl(" + (100 - dinoHunger()) + ", 100%, 50%)"
          }}
        ></div>
      </div>
    </div>
  );
};

export default Dinosaur;
