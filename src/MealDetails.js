import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import "./meal.css"

const MealDetails = () => {
const [meal, setMeal] = useState({})
    const [ingred, setIngred] = useState([])
    const params = useParams()

    useEffect(()=> {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
        .then((res)=>{
            const obj= res.data.meals[0]
            const strIng = Array(20).fill(0).reduce((acc, item,idx)=> {
               if(obj[`strIngredient${idx+1}`]) {
                   return [...acc, obj[`strIngredient${idx+1}`]]
               } return  acc

            },[])

            setIngred(strIng)
            setMeal(obj)
        })

},[params.id])

    return (
        <div>
            <div>
                <h4> Instructions:</h4> {meal.strInstructions}</div>
            <img src={meal.strMealThumb} alt="" className="meal-img"/>\
         <div className="row">
             {
                 ingred.map(item=> (
                     <div key={item.idMeal} className ="col-3 ing-wrapper" >
                         <div>{item}</div>
                         <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt=""/>
                     </div>
                 ))
             }
         </div>
        </div>
    );
};



export default MealDetails;