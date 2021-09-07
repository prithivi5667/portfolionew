import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav defaultActiveKey="#home">
              <Nav.Link>
                {" "}
                <Link to="home" spy={true} smooth={true} duration={500}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="about" spy={true} smooth={true} duration={500}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="projects" spy={true} smooth={true} duration={500}>
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="education" spy={true} smooth={true} duration={500}>
                  Education
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="experience" spy={true} smooth={true} duration={500}>
                  Work Experience
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="skills" spy={true} smooth={true} duration={500}>
                  Skills
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="contact" spy={true} smooth={true} duration={500}>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
