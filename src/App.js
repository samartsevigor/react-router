import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Meals from "./Views/Meals/Meals";
import MealDetails from "./Views/MealDetails/MealDetails";
import Browse from "./Views/Browse/Browse";
import Search from "./Components/Search/Search";
import Home from "./Views/Home/Home";
import Header from "./Components/Header/Header";
import Ingredients from "./Views/Ingredients/Ingredients";
import "./indexl.css"

function App() {
  return (

    <div className="container">
        <Router>
            <Header />
            <Route exact path="/" > <Home/> </Route>
            <Route exact path="/meals" ><Search /> <Meals /> </Route>
            <Route path="/meals/:id" > <MealDetails /></Route>
            <Route path="/browse/:name"> <Browse /></Route>
            <Route path="/ingredients/:name" > <Ingredients/> </Route>

        </Router>
    </div>
  );
}

export default App;
