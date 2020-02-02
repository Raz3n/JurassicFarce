import React from 'react';
import {Link} from 'react-router-dom';

const NavBar  = () => {
    
        return (
            <div>
                <h1>Jurassic Farce</h1>
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
                
            </div>
        );
    
}

export default NavBar;
