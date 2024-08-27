import React, { useState } from 'react';
import Nav from "../Nav/Nav"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

function login() {
  const history = useNavigate(); // Initialize useNavigate
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/Login", {
        
        gmail: String(user.gmail),
        password: String(user.password),
      })
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response?.data?.message || "Registration failed");
      });
  };

  const handlesubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await sendRequest();
      if(response.status === "ok") {
        alert("Login Success");
        history("/userdetails");

      }else{
        alert("Login eror");
      }

      }catch(err){
        alert("eror" + err.message);
      }
    
    
  };

  return (
    <div>
      <Nav /> 
      <h1>User Login</h1>
      <form onSubmit={handlesubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={user.name}
          onChange={handleInputChange}
          name="name"
          required
        />
        <br />  
        <br />
        <label>Gmail</label>
        <br />
        <input
          type="email"
          value={user.gmail}
          onChange={handleInputChange}
          name="gmail"
          required
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={user.password}
          onChange={handleInputChange}
          name="password"
          required
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default login;

