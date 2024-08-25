import React, { useEffect, useRef, useState } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import User from "../User/User";
import { useReactToPrint } from "react-to-print";

const url="http://localhost:5000/users";

const fetchHandler = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error after logging it, if needed
  }
};

function Users() {
  const [users,setUsers] = useState();
  useEffect(()=>{
    fetchHandler().then((data) => setUsers(data.users)) ;
  },[])

  //create function for download pdf
  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: ()  => ComponentsRef.current,
    DocumentTitle:"Users Report",
    onafterprint:()=>alert("Users report Successfully download !")

  })

  return (
    <div>
      <Nav />
      <h1>User Details Display Page</h1>
      <div ref={ComponentsRef}>
        {users && users.map((user , i) => (
          <div key={i}>
            <User user={user}/>
          </div>

        ))};
      </div>
      <button onClick={handlePrint}>Download Report</button>
    </div>
  );
}

export default Users;
