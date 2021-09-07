import React from "react";
import { Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "../details";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: data.experience
    };
  }
  render() {
    return (
      <Element name="experience" className="element">
        <div className="section" id="experience">
          <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">
              <span className="badge badge-success">Work Experience</span>
            </div>
            {this.state.experience.map((exp) => (
              <div className="card">
                <div className="row">
                  <div
                    className="col-md-3 "
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body cc-experience-header text-dark">
                      <p style={{ color: "" }}>
                        {exp.from} – {exp.to}
                      </p>
                      <div className="h5">{exp.role}</div>
                    </div>
                  </div>
                  <div
                    className="col-md-9 bg-primary"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body text-white">
                      <div className="h6 text-warning">
                        {"  "} <b></b>
                      </div>
                      <ul>
                        {exp.details.split(". ").map((d) => (
                          <li>{d}</li>
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

export default Experience;
