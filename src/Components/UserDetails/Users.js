import React from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
const url="http://Localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function Users() {
  
  return (
    <div>
      <Nav />
      <h1>User Details Display Page</h1>
    </div>
  );
}

export default Users;
