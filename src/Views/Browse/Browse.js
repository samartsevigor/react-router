import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useHistory, useParams} from "react-router-dom"
import MealsList from "../../components/MealsList/MealsList";

const Browse = () => {
    const [meals, setMeals] = useState([])
    const [error, setError] = useState("")
    const params = useParams()
    let history = useHistory();

    function handleClick() {
        history.goBack("/home");
    }

    useEffect(() => {
        const fetchApi = async () => {
            const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            data.meals ? setMeals(data.meals) : setError("Такого блюда нет")
        }
        fetchApi()
    }, [params.name])

    return (
        <div>
            {error ? <h2 className="error-text">{error}</h2> : <MealsList meals={meals}/>}
            <button type="button" onClick={handleClick} className="goBack-btn">
                Go back
            </button>
        </div>
    );
};

export default Browse;