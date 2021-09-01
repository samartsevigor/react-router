import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Meals from "./views/Meals/Meals";
import MealDetails from "./views/MealDetails/MealDetails";
import Browse from "./views/Browse/Browse";
import Ingredients from "./views/Ingredients/Ingredients";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";


function App() {
  return (
    <div className="container">
        <Router>
            <Header />
            <Route exact path="/" > <Home /> </Route>
            <Route exact path="/meals" ><Meals /> </Route>
            <Route path="/meals/:id" ><MealDetails /></Route>
            <Route path="/browse/:name"><Browse /></Route>
            <Route path="/ingredients/:name" ><Ingredients /></Route>
        </Router>
    </div>
  );
}

export default App;
