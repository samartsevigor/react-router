import React from 'react';
import {Link} from "react-router-dom";


const MealsList = ({meals}) => {
    return (
        <div className="row">
            {
                meals.map(item=>
                    <div className="col-3" key={item.idMeal}>
                       <div className="meal-item">
                           <Link to={`/meals/${item.idMeal}`} className="meal-link" >
                               <div className="box">
                                   <img src={item.strMealThumb} className="meal-img" alt=""/>
                                   <h4 className="meal-title">{item.strMeal}</h4>
                               </div>
                           </Link>
                       </div>
                    </div>
                )
            }
        </div>
    );
};

export default MealsList;