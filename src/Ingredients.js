import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from "axios";


const Ingredients = () => {
    const [ingredient, setIngredient] = useState([])
    const params = useParams()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            .then(({data}) => setIngredient(data.meals))
    }, [params.name])

    return (
        <div className="row">
            {
                ingredient.map(el =>
                    <div key={el.idMeal} className="col-3">
                        <Link to={`/meal/${el.idMeal}`}>
                            <h5>{el.strMeal}</h5>
                            <img src={el.strMealThumb} alt=""/>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}


export default Ingredients;