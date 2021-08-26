import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import User from "./User";
import UserDetails from "./UserDetails";
import Meal from "./Meal";
import MealDetails from "./MealDetails";
import Browser from "./Browser";

function App() {
  return (

    <Router>
    <Route exact path="/" > <Meal /> </Route>
      <Route path="/meal/:id" > <MealDetails /></Route>
      <Route path="/browse/:name" > <Browser /></Route>
      {/*<Route exact path="/"> <User /> </Route>*/}
      {/*<Route path="/user/:id" > <UserDetails/> </Route>*/}

    </Router>
  );
}

export default App;
