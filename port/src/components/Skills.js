import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Element } from "react-scroll";
import { data } from "../details";

//Fuctional Component using React Hook
const Skills = () => {
  const [skills] = useState(data.skills);
  return (
    <Element name="skills" className="element">
      <div className="section" id="about">
        <div className="container">
          <div className="h4 text-center mb-4 title">
            <span className="badge badge-success">Skills</span>
          </div>
          <div
            className="card text-white bg-success"
            data-aos="fade-up"
            data-aos-offset="10"
          >
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">Web Development</div>
                  {skills["Web Development"].split(",").map((webdev) => (
                    <button type="button" className="btn btn-warning">
                      {webdev}{" "}
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                  ))}
                  <br />
                  <br />
                  <div className="h4 mt-0 title">Programming Languages</div>
                  {skills["Programming Languages"].split(",").map((p_lan) => (
                    <button type="button" className="btn btn-warning">
                      {p_lan} <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">Database</div>
                  {skills["Database"].split(",").map((database) => (
                    <button type="button" className="btn btn-warning">
                      {database}{" "}
                      <i className="fa fa-check" aria-hidden="true">
                        {" "}
                      </i>
                    </button>
                  ))}
                  <br />
                  <br />
                  <div className="h4 mt-0 title">Others</div>
                  {skills["Others"].split(",").map((other) => (
                    <button type="button" className="btn btn-warning">
                      {other}{" "}
                      <i className="fa fa-check" aria-hidden="true">
                        {" "}
                      </i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
