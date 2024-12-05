import React from "react";
import App from "../../App";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <form>
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Your Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default Contact;
