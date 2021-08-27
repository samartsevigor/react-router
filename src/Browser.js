import React,{useState, useEffect} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom"
import "./meal.css"


const Browser = () => {
    const [meal, setMeal] = useState([])
    const [error, setError] = useState("")


    const params = useParams()

    useEffect(()=>{
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            .then(res=> {
                if(res.data.meals){
                    setMeal(res.data.meals)
                } else {
                    setError("Такого блюда нет")
                }
            })



    },[params.name])


    return (
        <div>
           <div className="row">
               {
                   meal.map(el=>
                       <div key={el.strMeal} className="col-3 meal-title">
                           <Link to={`/meal/${el.idMeal}`}>
                               <h4>{el.strMeal}</h4>
                               <img src={el.strMealThumb} alt=""/>
                           </Link>
                       </div>
                   )
               }
           </div>
            <h2 className="error-text">{error}</h2>
        </div>
    );
};

export default Browser;