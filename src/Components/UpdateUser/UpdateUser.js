import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });
  const history = useNavigate();
  const { id } = useParams()
  
  

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/users/${id}`)
        .then((res)=>res.data.user)
        .then((user)=>setInputs(
          {name:user.name,
          gmail:user.gmail,
          age:user.age,
          address:user.address}
        ))
        .catch((err) => console.error("Error fetching user data: ", err));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/users/${id}`, {
        name: String(inputs.name),
        gmail: String(inputs.gmail),
        age: String(inputs.age),
        address: String(inputs.address),
      })
      .then((res) => res.data)
      .catch((err) => console.error("Error updating user: ", err));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }));
  };
  


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(inputs); // Debugging: Check current state
    sendRequest().then(() => history("/userdetails")); // Navigate to the details page after update
  };
  
  

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={inputs.name}
            required
          />
          <br />
        </div>
        <div>
          <label>Gmail:</label>
          <br />
          <input
            type="email"
            name="gmail"
            onChange={handleChange}
            value={inputs.gmail}
            required
          />
          <br />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={inputs.age}
            required
          />
          <br />
        </div>
        <div>
          <label>Address:</label>
          <br />
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={inputs.address}
            required
          />
          <br />
        </div>
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
