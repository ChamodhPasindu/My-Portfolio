import "./style.css"
import React, {Component, Fragment} from "react";
import ContactInfo from "./ContactInfo";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <div id="contacts" className="container-md">
                    <div data-aos="zoom-in" className="page-title position-relative">
                        <h3>Contact Me</h3>
                        <hr/>
                    </div>
                    <br/><br/>
                    <p className="page-description">My inbox is always open. Whether you have a question or just want to
                        say hello, I'll try my best to get back to you! Feel free to get in touch and talk more about
                        your projects.</p>
                    <br/><br/>
                    <div  className="d-flex justify-content-evenly">
                        <a data-aos="zoom-in" href="mailto:chamodhpasindu@gmail.com">
                            <button className=" contact-btn" >Mail Me</button>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a data-aos="zoom-in">
                            <button className=" contact-btn">Get Resume</button>
                        </a>
                    </div>
                    <br/><br/>
                    <div className="d-flex mt-3 justify-content-center w-100">
                        <div data-aos="zoom-in" className="d-flex flex-wrap w-75 justify-content-evenly contact-card-holder">
                            <ContactInfo icon={<i className="bi bi-geo-alt-fill"/>} title={"Address"}
                                         detail={"Piliyandala,Sri Lanka"}/>
                            <div className="contact-info-card">
                                <div className="icon-div">
                                    <i className="bi bi-telephone-fill"/>
                                </div>
                                <div className="info-holder mt-3">
                                    <div>
                                        <h4>Contact Info</h4>
                                    </div>
                                        <a className="text-decoration-none telegram-click" href="https://t.me/CPasindu" target="_blank" rel="noreferrer">
                                            <p>
                                                <i className="bi bi-telegram"/>
                                                Telegram
                                            </p>
                                        </a>
                                </div>
                            </div>


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
                                        <a href="https://github.com/ChamodhPasindu" target="_blank" rel="noreferrer">
                                            <i className="bi bi-github fs-3 me-3 "/>
                                        </a>
                                        <a href="https://twitter.com/chamodh_pasindu"  target="_blank" rel="noreferrer">
                                            <i className="bi bi-twitter fs-3 me-3"/>
                                        </a>
                                        <a href="https://www.linkedin.com/in/chamodh-pasindu-9b6178217/"  target="_blank" rel="noreferrer">
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