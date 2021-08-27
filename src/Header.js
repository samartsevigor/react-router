import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
           <nav  className="nav">
               <Link to="/" className="nav-link"> Home </Link>
               <Link to="/meal"    className="nav-link"> Meal </Link>
               <Link to="/user"  className="nav-link"    > User </Link>
           </nav>

        </div>
    );
};

export default Header;