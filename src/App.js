import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import User from "./Components/User/User";
import Users from "./Components/UserDetails/Users";

function App() {
  return (
    <div>
       {/* <Home />  */}
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          {/* <Route path="/adduser" element={<User />} /> */}
          <Route path="/userdetails" element={<Users />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
