import React from "react";
import { Element } from "react-scroll";
import { data } from "../details";
import "bootstrap/dist/css/bootstrap.min.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: data.projects
    };
  }

  render() {
    return (
      <Element name="projects" className="element">
        <div className="section" id="experience">
          <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">
              <span className="badge badge-success">Projects</span>
            </div>
            {this.state.projects.map((project) => (
              <div className="card">
                <div className="row">
                  <div
                    className="col-md-3 bg-primary"
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body cc-experience-header">
                      <p style={{ color: "" }}>
                        {project.from} - {project.to}
                      </p>
                      <div className="h5">{project.p_name}</div>
                    </div>
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body">
                      {project.github ? (
                        <div className="h6">
                          <i className="fa fa-github"></i>
                          <a href={project.github} className="text-primary">
                            {"  "} {project.p_name}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                      {project.link ? (
                        <div>
                          <i className="fa fa-link" aria-hidden="true"></i>
                          <a href={project.link} className="text-success">
                            {" "}
                            {project.link}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                      <ul>
                        {project.details.split(". ").map((detail) => (
                          <div>
                            <li>{detail}</li>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    );
  }
}

export default Projects;
