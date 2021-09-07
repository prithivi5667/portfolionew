import React from "react";
import { Element } from "react-scroll";
import { data } from "../details";
import "bootstrap/dist/css/bootstrap.min.css";
import {Badge} from "react-bootstrap";
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: data.about,
            email: data.email,
            mobile: data.mobile,
            address: data.address,
            language: data.language,
            hobbies: data.hobbies,
        };
    }
    render() {
        return (
            <Element name="about" className="element">
                <div className="section" id="about">
                    <div className="container">
                        <div className="h4 text-center mb-4 title">
                        <Badge bg="success">About</Badge>
                        </div>
                        <div className="card" data-aos="fade-up" data-aos-offset="10">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="card-body">
                                        <div className="h4 mt-0 title">About</div>
                                        <p>{this.state.about}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 bg-primary text-white">
                                    <div className="card-body">
                                        
                                        <div className="row mt-3">
                                            <div className="col-sm-4">
                                                <strong className="text-uppercase">Email:</strong>
                                            </div>
                                            <div className="col-sm-8">{this.state.email}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-sm-4">
                                                <strong className="text-uppercase">Mobile:</strong>
                                            </div>
                                            <div className="col-sm-8">{this.state.mobile}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-sm-4">
                                                <strong className="text-uppercase">Address:</strong>
                                            </div>
                                            <div className="col-sm-8">{this.state.address}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-sm-4">
                                                <strong className="text-uppercase">Language:</strong>
                                            </div>
                                            <div className="col-sm-8">{this.state.language}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-sm-4">
                                                <strong className="text-uppercase">Hobbies:</strong>
                                            </div>
                                            <div className="col-sm-8">{this.state.hobbies}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        );
    }
}

export default About;
