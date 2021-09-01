import React from 'react';
import {Link, useHistory} from "react-router-dom";

const Ingredients = ({ingredients}) => {

    return (
        <div className="row">
            {
                ingredients.map((item, idx) =>
                    <div key={idx} className="col-3 ing-wrapper">
                        <Link to={`/ingredients/${item}`}>
                            <div>{item}</div>
                            <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt=""/>
                        </Link>

                    </div>
                )
            }
        </div>
    )
};

export default Ingredients;