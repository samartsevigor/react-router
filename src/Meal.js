import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import "./meal.css"

const Meal = () => {
    const [meals, setMeals] = useState([])


    // const filteredMeals = meals.filter(el=>el.name.toLowerCase().includes(search))

    useEffect(()=> {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then((res)=> setMeals(res.data.meals))

    },[])

    return (

            <div >
                <div className="row">
                    {
                        meals.map(item=>
                            <div className="col-3" key={item.idMeal}>
                                <Link to={`/meal/${item.idMeal}`} className="meal-link" >
                                    <h3 className="meal-title">{item.strMeal}</h3>
                                    <div className="box">
                                        <img src={item.strMealThumb} alt=""/>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
            </div>
        </div>
    );
};

export default Meal;