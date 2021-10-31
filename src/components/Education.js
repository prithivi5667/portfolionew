import React from "react";
import { Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "../details";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: data.education
    };
  }
  render() {
    return (
      <Element name="education" className="element">
        <div className="section" id="experience">
          <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">
              <span className="badge badge-success">Education</span>
            </div>
            {this.state.education.map((edu) => (
              <div className="card">
                <div className="row">
                  <div
                    className="col-md-12 bg-success"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body text-white text-center">
                      <div className="h6 text-warning">
                        {"  "} <b>{edu.stream}</b>
                      </div>
                      <p>
                        <i className="fa fa-university" aria-hidden="true"></i>{" "}
                        {edu.institute}
                      </p>
                      <p>
                        <i
                          className="fa fa-calendar-check-o"
                          aria-hidden="true"
                        ></i>{" "}
                        {edu.from} - {edu.to}
                      </p>
                      {edu.grade} in {edu.board}
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

export default Education;
