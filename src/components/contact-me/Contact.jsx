import "./contact.scss";
import contact from "../img/contact.png";
import { useState } from "react";
export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact">
      <div className="left">
        <img src={contact} alt="" />
      </div>
      <div className="right">
        <h2>Contact Me!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <textarea placeholder="message"></textarea>
          <button type="submit">Send Message</button>
          {message && <span>Thank you, will get back to you soon!</span>}
        </form>
      </div>
    </div>
  );
}
