import React from "react";
import Paddock from "./Paddock";

const PaddockList = ({ paddocks, handleSelectedPaddock }) => {
  if (paddocks.length === 0) {
    return <p>Loading...</p>;
  }

  if (paddocks.length === 0) {
    return <p>Loading...</p>;
  }

  function compare(a, b) {
    let comparison = 0;
    if (a.name > b.name) {
      comparison = 1;
    } else if (a.name < b.name) {
      comparison = -1;
    }
    return comparison;
  }

  const newPaddocks = paddocks.sort(compare);

  const paddocksList = newPaddocks.map(paddock => {
    return (
      <li key={paddock.id} className="component-item">
        <Paddock
          paddock={paddock}
          handleSelectedPaddock={handleSelectedPaddock}
        />
      </li>
    );
  });

  return (
    <ul className="innerContainer component-list-paddock">{paddocksList}</ul>
  );
};

export default PaddockList;
