import "./blog.scss";
import mobile from "../img/mobile.png";
import arrow from "../img/down.png";
import concertTracker from "../img/concert-tracker.jpg";
import k9Cupid from "../img/k9cupid.jpg";
import fix from "../img/ftf1.jpg";
import { useState } from "react";

export default function Blog() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      image: fix,
      title: "Food-Truck-Fix",
      subtitle:
        "A solution for Food-Truck-Owners to built custom mobile applications",
      description:
        "A MERN Stack application that allows for everyday food truck owners to create their own custom application that helps enhance their bussiness. Food truck owners will have the ability to add menu items, customize order experience, and change prices with ease.",
      repo: "https://github.com/D-Y-A-G/food-truck-app-creator",
      demo: "https://food-truck-fix.herokuapp.com/",
      technology: "HTML, CSS, JavaScript, Bulma, Stripe, MongoDB, REACT",
    },

    {
      id: 2,
      image: concertTracker,
      title: "Concert Tracker",
      subtitle: "Find your favorite band and concert info!",
      description:
        "Front-end application created by music lovers that allows users to search a band/artist for upcoming events, provide them with ticket information pricing and links with the top music videos based on search input.",
      repo: "https://github.com/D-Y-A-G/pj1-sam-dav-den",
      demo: "https://d-y-a-g.github.io/pj1-sam-dav-den/",
      technology: "HTML, CSS, JavaScript, Foundation, jQuery, Ticketmaster API",
    },

    {
      id: 3,
      image: k9Cupid,
      title: "K9Cupid",
      subtitle: "A social app for human's Best Friends!",
      description:
        "A built from scratch application for doggies to help them socialize and find other dogs with similar personalities and attributes to make fun and lasting friendships.",
      repo: "https://github.com/D-Y-A-G/K9Cupid",
      demo: "https://k9-cupid-final.herokuapp.com/",
      technology: "HTML, CSS, JavaScript, Bulma, HandleBars, MySQL",
    },
  ];

  const handleClick = (dir) => {
    dir === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="blog">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={mobile} alt="cell phone" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.subtitle}</p>
                  <span>{d.technology}</span>
                </div>
              </div>
              <div className="right">
                <img src={d.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src={arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
