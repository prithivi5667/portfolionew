import React from "react";
import { Element } from "react-scroll";
import { data } from "../details";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../img/pic3.jpeg";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: data.address,
            email: data.email,
            mobile: data.mobile
        };
    }
    render() {
        return (
            <Element name="contact" className="element">
                <div className="section" id="contact">
                    <div
                        className="cc-contact-information"
                        style={{ backgroundImage: `url(${bg})` }}
                    >
                        <div className="container">
                            <div className="cc-contact">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="card mb-0" data-aos="zoom-in">
                                            <div className="h4 text-center title">Contact Me</div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <form
                                                            action="mailto:{this.state.email}"
                                                            method="GET"
                                                        >
                                                            <div className="row mb-3">
                                                                <div className="col">
                                                                    <div className="input-group">
                                                                        <span className="input-group-addon">
                                                                            <i className="fa fa-user-circle"></i>
                                                                        </span>
                                                                        <input
                                                                            className="form-control"
                                                                            name="subject"
                                                                            type="text"
                                                                            placeholder="Subject"
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <textarea
                                                                            className="form-control"
                                                                            name="body"
                                                                            placeholder="Your Message"
                                                                            required
                                                                        ></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <input
                                                                type="submit"
                                                                className="btn btn-success"
                                                                value="Send"
                                                            />
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <p className="mb-0">
                                                            <strong>Address </strong>
                                                        </p>
                                                        <p className="pb-2">{this.state.address}</p>
                                                        <p className="mb-0">
                                                            <strong>Phone</strong>
                                                        </p>
                                                        <p className="pb-2">{this.state.mobile}</p>
                                                        <p className="mb-0">
                                                            <strong>Email</strong>
                                                        </p>
                                                        <p>{this.state.email}</p>
                                                    </div>
                                                </div>
                                            </div>
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

export default Contact;
