import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import User from "./User";
import UserDetails from "./UserDetails";
import Meal from "./Meal";
import MealDetails from "./MealDetails";
import Browser from "./Browser";
import Search from "./Search";
import Home from "./Home";
import Header from "./Header";
import Ingredients from "./Ingredients";
import "./meal.css"



function App() {
  return (

    <div className="container">
        <Router>
            <Header />
            <Route exact path="/" > <Home/> </Route>
            <Route exact path="/meal" ><Search /> <Meal /> </Route>
            <Route path="/meal/:id" > <MealDetails /></Route>
            <Route path="/browse/:name"> <Browser /></Route>
            <Route exact path="/user"> <User /> </Route>
            <Route path="/user/:id" > <UserDetails/> </Route>
            <Route path="/ingredients/:name" > <Ingredients/> </Route>

        </Router>
    </div>
  );
}

export default App;
