import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function User(props) {
  const { _id, name, gmail, age, address } = props.user;

  const navigate = useNavigate(); // Correctly named for clarity

  const deletehandler = async () => {
    try {
      // Await the delete request to complete
      await axios.delete(`http://localhost:5000/users/${_id}`);

      // If deletion is successful, navigate to the desired page
      alert("User deleted successfully");
      navigate("/") // Navigate to the homepage
      // Uncomment the line below if you want to navigate to user details instead
      // navigate("/userdetails");
      navigate("/userdetails")
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    }
  };

  return (
    <div>
      <h1>User Display</h1>
      <br />
      <h1>Id: {_id}</h1>
      <h1>Name: {name}</h1>
      <h1>Gmail: {gmail}</h1>
      <h1>Age: {age}</h1>
      <h1>Address: {address}</h1>
      <Link to={`/userdetails/${_id}`}>Update</Link>
      <button onClick={deletehandler}>Delete</button>
    </div>
  );
}

export default User;
