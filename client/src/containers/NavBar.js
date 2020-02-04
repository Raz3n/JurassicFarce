import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="navbar">
    <h1>Jurassic Farce</h1>
    <ul>
      <li>
        <Link to="/">Overview</Link>
      </li>
      <li>
        <Link to="/dinosaurs">Dinosaurs</Link>
      </li>
      <li>
        <Link to="/paddocks">Paddocks</Link>
      </li>
      <li>
        <Link to="/species">species</Link>
      </li>
    </ul>
    {/* <button>Kill All</button> */}
  </div>
);

export default NavBar;
