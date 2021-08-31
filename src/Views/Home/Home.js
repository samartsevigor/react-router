import React from 'react';
import pan from "../Images/pan.png"
import {useHistory} from "react-router-dom"

const Home = () => {
    const history = useHistory()
const handleClick =() => {
    history.push("/meals")
}

    return (
        <div className="row">
           <div className="col-6" >
<div>
    <h1 className="home-title">Making time a good time by making food the good food</h1>
    <p className="home-desc">Always fresh, delicious and healthy food</p>
    <button  className="main-link" onClick={handleClick}>Order now</button>
</div>
           </div>
<div className="col-6">
    <img src={pan} width="600" alt=""/>
</div>
        </div>
    );
};

export default Home;