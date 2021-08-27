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

function App() {
  return (

    <Router>
      <Header />
    <Route exact path="/" > <Home/> </Route>
    <Route path="/meal" ><Search /> <Meal /> </Route>
      <Route path="/meal/:id" > <MealDetails /></Route>
      <Route path="/browse/:name"> <Browser /></Route>
      <Route path="/user"> <User /> </Route>
      <Route path="/user/:id" > <UserDetails/> </Route>

    </Router>
  );
}

export default App;
