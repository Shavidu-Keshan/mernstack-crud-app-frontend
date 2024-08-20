import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";

function AddUser() {
    const history = useNavigate();
    const [inputs,setInputs] = useState({
         name:"",
         gmail:"",
         age:"",
         address:"",
    })
  return (
    <div>
      <Nav />
      <h1>Add user</h1>
    </div>
  );
}

export default AddUser;
