import "./navBar.scss";
import { Mail, Person } from "@material-ui/icons";

export default function NavBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navBar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#hello" className="logo">
            Logos
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+01 425 409 9122</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>dnsarce21@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>

            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
