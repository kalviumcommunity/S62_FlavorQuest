import React from "react";
import LandingPage from "./components/Landingpage"; 
import SingleRecipe from "./components/SingleRecipe"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/recipie" element={<SingleRecipe/>} />
      </Routes>
    </Router>
  );
}

export default App;
