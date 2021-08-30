import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import "./meal.css"

const MealDetails = () => {
    const [meal, setMeal] = useState({})
    const [youtube, setYoutube] = useState("")
    const [ingred, setIngred] = useState([])
    const params = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then((res) => {
                const obj = res.data.meals[0]
                const strIng = Array(20).fill(0).reduce((acc, item, idx) => {
                    if (obj[`strIngredient${idx + 1}`]) {
                        return [...acc, obj[`strIngredient${idx + 1}`]]
                    }
                    return acc
                }, [])
                setIngred(strIng)
                setMeal(obj)
                setYoutube(obj.strYoutube.slice(obj.strYoutube.indexOf("v=") + 2, obj.strYoutube.lenght))
            })
    }, [params.id])

    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <p className="meal-title">{meal.strMeal}</p>
                    <img src={meal.strMealThumb} alt="" className="meal-img"/>
                </div>
                <div className="col-6">
                    <div className="row">
                        {
                            ingred.map((item, idx) => (
                                <div key={idx} className="col-3 ing-wrapper">
                                    <Link to={`/ingredients/${item}`}>
                                        <div>{item}</div>
                                        <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt=""/>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div><h4> Instructions:</h4> {meal.strInstructions}</div>
                </div>
                {
                    youtube.length !== 0 &&
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtube}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                }


            </div>

        </div>
    );
};


export default MealDetails;