import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });
  return (
    <div>
      <Nav />
      <h1>Add user</h1>
      <form>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={inputs.name} required />
        </div>
        <div>
          <label>Gmail: </label>
          <input type="email" name="gmail" value={inputs.gmail} required />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" name="age" value={inputs.age} required />
        </div>
        <div>
          <label>Address: </label>
          <input type="text" name="address" value={inputs.address} required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
