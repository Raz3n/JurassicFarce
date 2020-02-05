import React from "react";
import Paddock from "./Paddock";

const PaddockList = ({ paddocks, handleSelectedPaddock }) => {
  if (paddocks.length === 0) {
    return <p>Loading...</p>;
  }

  const paddocksList = paddocks.map(paddock => {
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
