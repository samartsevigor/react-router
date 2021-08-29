import React, {useState} from 'react';
import { useHistory} from "react-router-dom";
import "./meal.css"

const Search = () => {
    const [search, setSearch] = useState("")
const history= useHistory()
    const handleInput =(e) => {
        setSearch(e.target.value.toLowerCase())
    }
    const handleClick =() => {
        if(search.trim()) {
            history.push(`/browse/${search}`)
        }
    }

    return (
        <div className="search-box" >
            <div>
                <input type="text"  onChange={handleInput}   value={search}/>
                <button className="search-btn" onClick={handleClick}> Get</button>
            </div>
        </div>
    );
};


export default Search;