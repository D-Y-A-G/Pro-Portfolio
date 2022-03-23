import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects " id="projects">
      <h1>Projects</h1>
      <ul>
        <li className="active ">Featured</li>
        <li>Web App</li>
        <li>Responsive</li>
        <li>Design</li>
      </ul>
      <div className="container ">
        <div className="item">
          <img src="/assets/ftf.jpg" alt="food-truck fix" />
          <h3>Food-Truck Fix</h3>
        </div>
        <div className="item ">
          <img src="/assets/concert-tracker.jpg" alt="food-truck fix" />
          <h3>K9Cupid</h3>
        </div>
        <div className="item ">
          <img src="/assets/k9cupid.jpg" alt="food-truck fix" />
          <h3>Concert Tracker</h3>
        </div>
      </div>
    </div>
  );
}
