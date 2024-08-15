import React from "react";
import "./App.css";
import Home from "./Components/Home/Home"; 
import { Route, Routes } from "react-router-dom";
//import nav from "./Components/nav/nav";

function App() {
  return (
    <div>
      <Home></Home>
      <React.Fragment>
        <Routes>
          <Route path="/mainhome" element={<Home/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
