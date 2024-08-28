import Nav from "../Nav/Nav";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contactus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Correct usage of sendForm method with string parameters
    emailjs
      .sendForm('service_tgrrd2s', 'template_a3my8fr', form.current, '8UC5-_XlwLrspg0ex') 
      .then(
        (result) => {
          console.log(result.text);
          alert("Success! Your message has been sent.");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div>
      <Nav />
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <br />
        <input type="text" name="user_name" required />
        <br /><br />
        <label>Email</label>
        <br />
        <input type="email" name="user_email" required />
        <br /><br />
        <label>Message</label>
        <br />
        <textarea name="message" required />
        <br /><br />
        
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contactus;
