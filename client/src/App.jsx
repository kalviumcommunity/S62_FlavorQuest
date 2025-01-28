import React from "react";
import LandingPage from "./components/Landingpage"; 
import SingleRecipe from "./components/SingleRecipe"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Entities from "./components/entities";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/recipie" element={<SingleRecipe/>} />
        <Route path ="/entities" element={<Entities/>}/>
      </Routes>
    </Router>
  );
}

export default App;
