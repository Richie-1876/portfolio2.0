import "./App.css";
import Header from "./components/Header.js";
import NavBar from "./components/NavBar.js";
import AboutMe from "./components/AboutMe.js";
import Skills from "./components/Skills";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div id="hue">
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
