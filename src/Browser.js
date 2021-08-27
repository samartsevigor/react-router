import React,{useState, useEffect} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom"
import "./meal.css"
import Search from "./Search";

const Browser = () => {
    const [meal, setMeal] = useState([])
    const params = useParams()

    useEffect(()=>{
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            .then(res=> setMeal(res.data.meals))

    },[])

    return (
        <div className="row">
            {
                meal.map(el=>
                <div key={el.strMeal} className="col-3 meal-title">
                <h4>{el.strMeal}</h4>
                    <img src={el.strMealThumb} alt=""/>
                </div>
                )
            }
        </div>
    );
};

export default Browser;