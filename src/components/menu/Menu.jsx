import "./menu.scss";
import resume from "../img/DenisArceResumeWebDev2022.pdf"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href={resume} className="resume">Resume</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#projects">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#blog">Blog</a>
        </li>
      </ul>
    </div>
  );
}
