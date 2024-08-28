import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    
  });

  // Define sendRequest function
  const sendRequest = async () => {
    return await axios
      .post("http://localhost:5000/login", {
        gmail: String(user.gmail),
        password: String(user.password),
      })
      .then((res) => res.data);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // Handle form submission
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response.status === "ok") {
        alert("Login success");
        history("/userdetails");
      } else {
        alert("Login error");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  // Properly close the function before the return statement
  return (
    <div>
      <Nav />
      <h1>User Login</h1>
      <form onSubmit={handlesubmit}>
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

export default Login;
