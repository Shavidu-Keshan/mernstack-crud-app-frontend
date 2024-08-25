import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function User(props) {
  const { _id, name, gmail, age, address } = props.user;

  
  return (
    <div>
      <h1>user display</h1>
      <br></br>
      <h1>Id:{_id}</h1>
      <h1>Name:{name}</h1>
      <h1>Gmail:{gmail}</h1>
      <h1>Age:{age}</h1>
      <h1>Address:{address}</h1>
      <Link to={`/userdetails/${_id}`}>Update</Link>



      <button>Delete:</button>
    </div>
  );
}

export default User;
