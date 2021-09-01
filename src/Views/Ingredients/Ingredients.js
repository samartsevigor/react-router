import React, {useState, useEffect} from 'react';
import {useParams, Link, useHistory} from 'react-router-dom'
import axios from "axios";
import MealsList from "../../components/MealsList/MealsList";


const Ingredients = () => {
    const [meals, setMeals] = useState([])
    const params = useParams()
    useEffect( () => {
      const fetchApi = async () => {
          const {data} =  await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
          setMeals(data.meals)
      }
      fetchApi()
    }, [params.name])

    let history = useHistory();
    function handleClick() {
        history.goBack("/home");
    }


    return (
        <div>
       <MealsList meals={meals} />
            <button type="button" onClick={handleClick}  className="goBack-btn">
                Go back
            </button>
        </div>
    )
}


export default Ingredients;