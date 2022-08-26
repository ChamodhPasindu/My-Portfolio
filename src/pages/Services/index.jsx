import React, {Component, Fragment} from "react";
import "./style.css"
import "../../index.css"
import ServiceCard from "./ServiceCard";

class Services extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-md">
                    <div className="page-title position-relative">
                        <h3>My Services</h3>
                        <hr/>
                    </div>
                    <br/><br/>
                    <p className="w-100 text-center page-description">I am able to perform well in a variety of fields,
                        here are some of my strongest skills!</p>
                    <br/><br/>
                    <div>
                        <div className="container-md">
                            <div className="d-flex flex-wrap justify-content-evenly">
                                <ServiceCard
                                    icon={<i className="bi bi-laptop"/>} title={"Web Development"}
                                    paragraph={"I’m always ready to make a custom portable robust product that fits the need of any client"}/>
                                <ServiceCard
                                    icon={<i className="bi bi-phone"/>} title={"Mobile Application"}
                                    paragraph={"I love creating apps that change the way people interact with their smartphones"}/>
                                <ServiceCard
                                    icon={<i className="bi bi-palette"/>} title={"UX/UI Design"}
                                    paragraph={"I love to making wireframes and decent UI’s for get better web surfing experience to the people who like minimalism"}/>
                            </div>
                        </div>
                    </div>
                    <br/><br/>

                </div>
            </Fragment>
        )
    }
}

export default Services;