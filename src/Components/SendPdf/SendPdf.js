import React, { useEffect, useState } from 'react';
import Nav from "../Nav/Nav";
import axios from 'axios'; // Correct import

function SendPdf() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null); // Changed to null to represent no file selected
  const [allPdf, setAllPdf] = useState("");

  useEffect(() => {
    getpdf();
  }, []); // Add empty dependency array to call getpdf only on component mount

  const getpdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/getFile");
      console.log(result.data.data);
      setAllPdf(result.data.data);
    } catch (error) {
      console.error("Error fetching PDFs: " + error.message);
    }
  }

  const submitPdf = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file); // Attach the file

    try {
      // Sending a POST request to upload the file
      const result = await axios.post("http://localhost:5000/uploadfile", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      // Logging the response
      console.log(result);

      // Checking if the response status is 200 and handling success
      if (result.data.status === 200) {
        alert("Upload Success");
        getpdf(); // Call the function to get PDF data after a successful upload
      } else {
        alert("Upload Error");
      }
    } catch (error) {
      // Catching and handling any errors during the file upload
      console.error("Error Uploading: " + error.message);
      alert("Error Uploading: " + error.message);
    }
  }

  return (
    <div>
      <Nav />
      <h1>Send Pdf</h1>
      <form onSubmit={submitPdf}>
        <label>Pdf Title</label><br />
        <input 
          required 
          type='text' 
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state
        /><br /><br />
        <label>Select Pdf File</label><br />
        <input 
          required 
          type="file" 
          accept="application/pdf" 
          onChange={(e) => saveFile(e.target.files[0])} // Update file state
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SendPdf;

