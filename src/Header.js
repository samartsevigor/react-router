import React from 'react';
import {Link, useHistory} from "react-router-dom";

const Header = () => {
        let history = useHistory();

        function handleClick() {
            history.goBack("/home");
        }

    return (
        <div>
           <nav  className="nav">
               <Link to="/" className="nav-link"> Home </Link>
               <Link to="/meal" className="nav-link"> Meal </Link>
               <Link to="/user"  className="nav-link" > User </Link>
               <button type="button" onClick={handleClick}  className="search-btn">
                   Go home
               </button>
           </nav>

        </div>
    );
};

export default Header;


