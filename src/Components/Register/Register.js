import React, { useState } from "react";
import Nav from "../Nav/Nav"; 
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure to import axios

function Register() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/register", {
        name: String(user.name),
        gmail: String(user.gmail),
        password: String(user.password),
      })
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response?.data?.message || "Registration failed");
      });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    
    sendRequest()
      .then(() => {
        alert("Register Success");
        history("/userdetails");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <Nav />
      <h1>User Register</h1>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
