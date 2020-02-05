import React from "react";

const Species = ({ species, handleSelectedSpecies }) => {
  if (!species) {
    return "Loading";
  }

  function handleSelect(e) {
    handleSelectedSpecies(species);
  }

  return (
    <div onClick={handleSelect}>
      <p className="species-type-title">{species.type}</p>
      <p>{species.diet}</p>
      <img src={species.image} alt={species.type} />
    </div>
  );
};

export default Species;
