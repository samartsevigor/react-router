import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./meal.css"

const Search = () => {
    const [search, setSearch] = useState("")
    // const filteredMeal = meal.filter(el=>el.name.toLowerCase().includes(search))

    const handleInput =(e) => {
        setSearch(e.target.value.toLowerCase())
    }

    return (
        <div className="search-box" >
            <div>
                <input type="text"  onChange={handleInput}   value={search}/>
                <Link to={ `/browse/${search}`}><button className="search-btn"> Get</button> </Link>
            </div>
        </div>
    );
};

export default Search;