import "./projects.scss";
import PortfolioList from "../project-list/ProjectList";
import { useEffect, useState } from "react";
import { featured, web, responsive } from "../../projectData";

export default function Projects() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured Projects",
    },
    {
      id: "web",
      title: "Web Applications",
    },
    {
      id: "responsive",
      title: "Responsive Design",
    },
    // {
    //   id: "saas",
    //   title: "SaaS (coming soon)",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featured);
        break;

      case "web":
        setData(web);
        break;

      case "responsive":
        setData(responsive);
        break;

      default:
        setData(featured);
    }
  }, [selected]);

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
        {data.map((d) => (
          <div className="item">
            <img src={d.image} alt="food-truck fix" />
            <h3>{d.title}</h3>
            <p>{d.technology}</p>
            <a className="demo" href={d.repo}>
              Check it out!
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
