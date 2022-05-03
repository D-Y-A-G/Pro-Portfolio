import "./contact.scss";
import contact from "../img/contact.png";
export default function Contact() {
  return (
    <div className="contact">
      <div className="left">
        <img src={contact} alt="" />
      </div>
      <div className="right">
        <h2>Contact Me!</h2>
        <form action="">
          <input type="text" placeholder="email" />
          <textarea placeholder="message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
