import React from "react";
import Dinosaur from "./Dinosaur";

const DinosaurList = props => {
  function compare(a, b) {
    let comparison = 0;
    if (a.name > b.name) {
      comparison = 1;
    } else if (a.name < b.name) {
      comparison = -1;
    }
    return comparison;
  }

  const newDinos = props.dinosaurs.sort(compare);

  if (!props.dinosaurs.length) {
    return <h1>You've killed all the dinosaurs!</h1>;
  }

  const dinoList = newDinos.map((dinosaur, index) => {
    return (
      <li key={index} className="component-item">
        <Dinosaur
          dinoIndex={index}
          dinosaur={dinosaur}
          paddocks={props.paddocks}
          handleMoveDinosaur={props.handleMoveDinosaur}
          handleFeedDino={props.handleFeedDino}
          handleDeleteDino={props.handleDeleteDino}
        />
      </li>
    );
  });

  return (
    <ul className="component-list innerContainer listDinosaurs">{dinoList}</ul>
  );
};

export default DinosaurList;
