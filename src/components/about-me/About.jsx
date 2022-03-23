import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

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
          <img src="assets/DA.jpg" alt="portrait" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey there, I am</h2>
          <h1>Denis Arce</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#projects">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
