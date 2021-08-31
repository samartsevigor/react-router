import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from "axios";
import Youtube from "../../Components/Youtube/Youtube";
import Ingredients from "../../Components/Ingredients/Ingredients";

const MealDetails = () => {
    const [meal, setMeal] = useState({})
    const [youtube, setYoutube] = useState("")
    const [ingredients, setIngredients] = useState([])
    const params = useParams()

    useEffect(async() => {
       const {data: {meals}} = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
        const ingredientsList = Array(20).fill(0).reduce((acc, item, idx) => {
            const ingredient = meals[0][`strIngredient${idx + 1}`]
                    return ingredient ? [...acc, ingredient] : acc
                }, [])
        setIngredients(ingredientsList)
            setMeal(meals[0])
        const youtubeCode = meals[0].strYoutube.slice(meals[0].strYoutube.indexOf("v=") + 2, meals[0].strYoutube.lenght)
            setYoutube(youtubeCode)
    }, [params.id])

    let history = useHistory();
    function handleClick() {
        history.goBack("/home");
    }

    return (
            <div className="row">
                <div className="col-6">
                    <img src={meal.strMealThumb} alt="" className="meal-img"/>
                    <h4 className="meal-title">{meal.strMeal}</h4>
                    <p className="meal-title"> Instructions: {meal.strInstructions} </p>
                    <Youtube youtube={youtube}/>
                </div>
                <div className="col-6">
                        <Ingredients ingredients={ingredients} />
                </div>
                <button type="button" onClick={handleClick}  className="goBack-btn">
                    Go back
                </button>
            </div>
    );
};


export default MealDetails;