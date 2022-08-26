import "./style.css"
import React, {Component, Fragment} from "react";
import ContactInfo from "./ContactInfo";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-md">
                    <div className="page-title position-relative">
                        <h3>Contact Me</h3>
                        <hr/>
                    </div>
                    <br/><br/>
                    <p className="page-description">My inbox is always open. Whether you have a question or just want to
                        say hello, I'll try my best to get back to you! Feel free to get in touch and talk more about
                        your projects.</p>
                    <br/><br/>
                    <div className="d-flex justify-content-evenly">
                        <button className="explore-more-btn contact-btn">Mail Me</button>
                        <button className="explore-more-btn contact-btn">Get Resume</button>
                    </div>
                    <br/><br/>
                    <div className="d-flex justify-content-center w-100">
                        <div className="d-flex flex-wrap w-75 justify-content-evenly contact-card-holder">
                            <ContactInfo icon={<i className="bi bi-geo-alt-fill"/>} title={"Address"}
                                         detail={"Piliyandala,Sri Lanka"}/>
                            <ContactInfo icon={<i className="bi bi-telephone-fill"/>} title={"Mobile Number"}
                                         detail={"+94 78 870 6233"}/>
                            <ContactInfo icon={<i className="bi bi-envelope-check-fill"/>} title={"Email Address"}
                                         detail={"chamodhpasindu@gmail.com"}/>
                            <div className="contact-info-card">
                                <div className="icon-div">
                                    <i className="bi bi-link-45deg"/>
                                </div>
                                <div className="info-holder mt-3">
                                    <div>
                                        <h4>Social Profile</h4>
                                    </div>
                                    <h5>
                                        <a href="https://github.com/ChamodhPasindu" target="_blank">
                                            <i className="bi bi-github fs-3 me-3 "/>
                                        </a>
                                        <a href="https://twitter.com/chamodh_pasindu"  target="_blank">
                                            <i className="bi bi-twitter fs-3 me-3"/>
                                        </a>
                                        <a href="https://www.linkedin.com/in/chamodh-pasindu-9b6178217/"  target="_blank">
                                            <i className="bi bi-linkedin fs-3"/>
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Contact