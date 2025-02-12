import React from "react";
import LandingPage from "./components/Landingpage";
import SingleRecipe from "./components/SingleRecipe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Entities from "./components/entities";
import AddEntity from "./components/AddEntity";
import UpdateEntities from "./components/UpdateEntities";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipie" element={<SingleRecipe />} />
        <Route path="/entities" element={<Entities />} /> 
        <Route path="/add-entity" element={<AddEntity />} />
        {/* <Route path="/update-entity/:id" element={<UpdateEntities />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
