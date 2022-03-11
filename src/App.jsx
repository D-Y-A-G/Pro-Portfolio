import NavBar from "./components/navbar/NavBar";
import About from "./components/about-me/About";
import Projects from "./components/portfolio/Projects";
import Contact from "./components/contact-me/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="sections">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
