import React, {Component, Fragment} from 'react';
import "./style.css"

class About extends Component{
    render() {
        return (
            <Fragment>
                <div className="container-md ">
                    <div>
                        <div className="about-title position-relative">
                            <h3 >About Me</h3>
                            <hr/>
                        </div>
                        <br/><br/>
                        <div className="d-flex justify-content-around align-items-center about-content-area">
                            <div className=" p-holder">
                                <p>
                                    A full-stack software developer working on java & javascript. Having a great passion in both back-end and front-end development, I can create API's and decent UI's. I am under graduated student in IJSE(Institute of Java & Software Engineering).
                                </p>
                                <br/>
                                <p>
                                    I am a motivated individual who likes to learn new things and is a quick learner. I am very passionate and enthusiastic about creating constructive and efficient solutions. I believe that having an open mind can help you remain creative and grasp ideas from any subject to implement it in your field!
                                </p>
                            </div>
                            <div className="detail-card-holder text-center">
                                <div>
                                    <h1>20+</h1>
                                    <h6>Completed Project</h6>
                                </div>
                                <div>
                                    <h1>02+</h1>
                                    <h6>Years of Experience</h6>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                    </div>
                    <div>
                        <div className="stack-title position-relative">
                            <h3>Known TechStack</h3>
                            <hr/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

};
export default About;