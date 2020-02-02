import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
   
    
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dinosaurs">Dinosaurs</Link>
        </li>
        <li>
          <Link to="/paddocks">Paddocks</Link>
        </li>
      </ul>

  
)

export default NavBar;
