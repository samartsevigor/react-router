import React, {useState, useEffect} from 'react';
import axios from "axios";
import MealsList from "../../Components/MealsList/MealsList";
import {useHistory} from "react-router-dom";


const Meal = () => {
    const [meals, setMeals] = useState([])

    useEffect(()=> {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then((res)=> setMeals(res.data.meals))

    },[])
    let history = useHistory();
    function handleClick() {
        history.goBack("/home");
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

export default Meal;