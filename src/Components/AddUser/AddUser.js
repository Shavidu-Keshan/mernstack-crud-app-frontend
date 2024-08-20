import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddUser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });
  const handleChange = (e)=>{
    setInputs((prevState)=> ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
  };
  const handlesubmit = (e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('userdetails'))
  }

  const sendRequest = async()=>{
    await axios.post("http://localhost:5000/users",{
        name: String (inputs.name),
        gmail: String (inputs.gmail),
        age: Number (inputs.age),
        address: String (inputs.address),

    }).then(res => res.data);
  }


  return (
    <div>
      <Nav />
      <h1>Add user</h1>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Name: </label>
          <br/>
          <input type="text" name="name" onChange={handleChange} value={inputs.name} required />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Gmail: </label>
          <br />
          <input type="email" name="gmail" onChange={handleChange} value={inputs.gmail} required />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Age: </label>
          <br />
          <input type="number" name="age" onChange={handleChange} value={inputs.age} required />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Address: </label>
          <br />
          <input type="text" name="address" onChange={handleChange} value={inputs.address} required />
          <br></br>
          <br></br>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
