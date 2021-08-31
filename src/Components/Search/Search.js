import React, {useState} from 'react';
import { useHistory} from "react-router-dom";



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

    const handleKeyPress =(e) => {
        if(e.key==="Enter") {
            handleClick()
        }
    }

    return (
        <div className="search-box" >
                <input type="text"  onChange={handleInput} onKeyUp={handleKeyPress}  placeholder="Search..." value={search}/>
                <button className="btn" onClick={handleClick}> Get</button>
        </div>
    );
};


export default Search;