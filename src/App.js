import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import User from "./Components/User/User";
import Users from "./Components/UserDetails/Users";
import AddUser from "./Components/AddUser/AddUser";
import UpdateUser from "./Components/UpdateUser/UpdateUser";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Contactus from "./Components/ContactUs/Contactus";
import SendPdf from "./Components/SendPdf/SendPdf";


function App() {
  return (
    <div>
       {/* <Home />  */}
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/userdetails" element={<Users />} />
          <Route path="/regi" element={<Register />} />
          <Route path="/log" element={<Login />} />
          <Route path="/conus" element={<Contactus />} />
          <Route path="/sendpdf" element={<SendPdf />} />
          <Route path="/userdetails/:id" element={<UpdateUser />} />

        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
