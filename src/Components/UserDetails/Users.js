import React, { useEffect, useRef, useState } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import User from "../User/User";
import { useReactToPrint } from "react-to-print";
import './users.css';

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

  });

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults,setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
      Object.values(user).some((field)=>
         
      field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      ))
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  };

   const handleSendReport = () => {
    //Create the whatsapp Chat url
    const whatsappNumber = "+94719988968";
    const message = `Selected User Reports`
    const whatsappUrl = `https://web.whatsapp.com/swnd?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}` ; 
    //open the whatsapp chat in new Window
    window.open(whatsappUrl,"_blank");
   }

  return (
    <div>
      <Nav />
      <h1>User Details Display Page</h1>
      <input onChange={(e) => setSearchQuery(e.target.value)}
       type="text"
       name="search"
       placeholder="Search user details">

      </input>
      <button onClick={handleSearch}>Search</button>
      {noResults ?(
        <div>
          <p>No Users Found</p>
        </div>
      ):(
      <div ref={ComponentsRef}>
        {users && users.map((user , i) => (
          <div key={i}>
            <User user={user}/>
          </div>

        ))};
      </div>
      )}
      <button onClick={handlePrint}>Download Report</button>
      <br></br>
      <button onClick={handleSendReport }>Send WhatsApp Message</button>
    </div>
  );
}

export default Users;
