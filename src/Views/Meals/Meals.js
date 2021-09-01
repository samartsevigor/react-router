import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import MealsList from "../../components/MealsList/MealsList";


const Meals = () => {
    const [meals, setMeals] = useState([])
    let history = useHistory()

    useEffect(()=> {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then((res)=> setMeals(res.data.meals))

    },[])

    function handleClick() {
        history.goBack("/home")
    }

    return (
            <div >
               <MealsList meals={meals}/>
                <button type="button" onClick={handleClick}  className="goBack-btn">
                    Go back
                </button>
        </div>
    );
};

export default Meals;