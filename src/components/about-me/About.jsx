import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import den from "../img/DA.jpg";
import darrow from "../img/down.png";

export default function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 150,
      backSpeed: 60,
      showCursor: true,
      strings: ["Father ", "Developer ", "Content Creator "],
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src={den} alt="portrait" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey there, I am</h2>
          <h1>Denis Arce</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <p>About Me...</p>
          <h5>
            Full stack web developer with Business Management and Finance
            experience educated at University of Texas at San Antonio. Skills in
            HTML, CSS, and JavaScript, REACT, NoSQL, C++ and strengths in
            managing teams, learning technology, creativity, and teamwork. I’m
            excited to develop responsive websites, and provide unique
            perspectives on how users interact with websites and applications.
            Passionate about approaching programming challenges and leveraging
            my skills as part of a fast-paced, ever-growing and quality driven
            team to build better experiences for users.
          </h5>
        </div>
        <a href="#projects">
          <img src={darrow} alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
