import NavBar from "./components/navbar/NavBar";
import About from "./components/about-me/About";
import Projects from "./components/portfolio/Projects";
import Contact from "./components/contact-me/Contact";
// import Blog from "./components/blog/Blog";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <About />
        <Projects />
        {/* <Blog /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
