import "./projects.scss";
import PortfolioList from "../project-list/ProjectList";
import { useState } from "react";

export default function Projects() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Feature",
    },
    {
      id: "web",
      title: "Web Applications",
    },
    {
      id: "responsive",
      title: "Responsive",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="/assets/ftf.jpg" alt="food-truck fix" />
          <h3>Food-Truck Fix</h3>
        </div>
        <div className="item">
          <img src="/assets/concert-tracker.jpg" alt="food-truck fix" />
          <h3>K9Cupid</h3>
        </div>
        <div className="item">
          <img src="/assets/k9cupid.jpg" alt="food-truck fix" />
          <h3>Concert Tracker</h3>
        </div>
      </div>
    </div>
  );
}
