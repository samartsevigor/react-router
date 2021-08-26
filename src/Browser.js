import React,{useState, useEffect} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom"


const Browser = () => {
    const [search, setSearch] = useState([])
    const params = useParams()
    useEffect(()=>{
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            .then(res=> setSearch(res.data))

    },[])

    return (
        <div>
            {
                search.map(item=>
                <Link to={`/`}> </Link>)


            }
        </div>
    );
};

export default Browser;