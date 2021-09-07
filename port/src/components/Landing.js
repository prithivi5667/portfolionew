import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../img/pic1.jpg";
import { Element } from "react-scroll";
import { data } from "../details";
import { Link } from "react-scroll";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: data.img,
      name: data.name,
      tag: data.tag,
      cv_link: data.cv_link
    };
  }
  render() {
    return (
      <Element name="home" className="element">
        <div className="profile-page" id="home">
          <div className="wrapper">
            <div className="page-header page-header-small" filter-color="green">
              <div
                className="page-header-image"
                data-parallax="true"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
              <div className="container">
                <div className="content-center">
                  <div className="cc-profile-image">
                    <a href="/#">
                      <img src={this.state.img} alt="Profile Pic" />
                    </a>
                  </div>
                  <div className="h2 title">{this.state.name}</div>
                  <br />
                  <p className="category text-warning">{this.state.tag}</p>
                  <Link
                    to="contact"
                    className="btn btn-success smooth-scroll mr-2"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Contact Me
                  </Link>
                  <a className="btn btn-success" href={this.state.cv_link}>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Landing;
