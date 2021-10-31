import React from "react";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Landing />
          <About />
          <Projects />
          <Education />
          <Experience />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;