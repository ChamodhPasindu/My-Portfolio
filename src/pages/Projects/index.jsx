import React, {Component, Fragment} from "react";
import ProjectCard from "./ProjectCard";
import student_system from "../../assets/img/student-system.png"
import hotel_system from "../../assets/img/hotel-system.JPG"
import pos_system from "../../assets/img/pos-system.png"
import car_rental from "../../assets/img/car-rental.png"
import js_game from "../../assets/img/js-game.png"
import chat_app from "../../assets/img/chat-app.png"

class Projects extends Component {
    render() {
        return (
            <Fragment>
                <div  id="projects" className="container-md">
                    <div data-aos="zoom-in" className="page-title position-relative">
                        <h3>Projects</h3>
                        <hr/>
                    </div>
                    <br/>
                    <p className="page-description">Here's some of my projects that I have worked on.</p>
                    <br/>
                    <div  className="d-flex flex-wrap justify-content-evenly">
                        <ProjectCard img={student_system} title={"Student Management System"}
                                     link={"https://github.com/ChamodhPasindu/Student-Management-System-ORM"}
                                     paragraph={"Implementation of desktop application for sipsewana institute for manage all student details."}
                                     first={"java"} second={"javaFX"} third={"hibernate"}/>
                        <ProjectCard img={hotel_system} title={"Hotel Management System"}
                                     link={"https://github.com/ChamodhPasindu/Hotel-Management-System"}
                                     paragraph={"This System can use for manage all hotel activities like room reservation,guest check in and out calculate income and other etc."}
                                     first={"java"} second={"javaFX"} third={"mysql"}/>
                        <ProjectCard img={chat_app} title={"Chat App"}
                                     link={"https://github.com/ChamodhPasindu/Simple-Chat-App"}
                                     paragraph={"This is simple chat application for demonstrate the knowledge of network programming and multithreading"}
                                     first={"java"} second={"javaFX"} third={"multithread"}/>
                        <ProjectCard img={js_game} title={"Space Shooter Game"}
                                     link={"https://github.com/ChamodhPasindu/space-shooter-game"}
                                     paragraph={"Create simple shooting game using javascript functions"}
                                     first={"javascript"} second={"html"} third={"css"}/>
                        <ProjectCard img={pos_system} title={"Point of sales Sale System"}
                                     link={"https://github.com/ChamodhPasindu/POS-Layerd"}
                                     paragraph={"Implementation of pos system for manage inventory,order and make payment bill for customer."}
                                     first={"java"} second={"javaFX"} third={"mysql"}/>
                        <ProjectCard img={car_rental} title={"Car Rental System"}
                                     link={"https://github.com/ChamodhPasindu/Car-Rental-System-Backend"}
                                     paragraph={"This car rental system is a web application that able to manage all reservations.This system can be simplify all activities of vehicle reservation service."}
                                     first={"java"} second={"spring"} third={"hibernate"}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a data-aos="fade-left" href="https://github.com/ChamodhPasindu" target="_blank" rel="noreferrer">
                            <button type="button" className="explore-more-btn">Explore more <i
                                className="bi bi-caret-right-fill"/><i
                                className="bi bi-caret-right-fill"/></button>
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Projects