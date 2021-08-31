import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {findAllByDisplayValue} from "@testing-library/react";

const Header = () => {
      <div>

      </div>

    return (
        <div>
           <nav  className="nav">
               <Link to="/" className="nav-link"> Home </Link>
               <Link to="/meals" className="nav-link"> View all meals </Link>
           </nav>

        </div>
    );
};

export default Header;


