import React, {Component, Fragment} from 'react';
import "./style.css"
import "../../index.css"
import java_logo from "../../assets/icon/Java10x.png"
import python_logo from "../../assets/icon/Python10x.png"
import js_logo from "../../assets/icon/JavaScript10x.png"
import html_logo from "../../assets/icon/Html 510x.png"
import css_logo from "../../assets/icon/CSS310x.png"
import spring_logo from "../../assets/icon/Spring Logo10x-1.png"
import springboot_logo from "../../assets/icon/Spring Logo10x-1.png"
import bootstrap_logo from "../../assets/icon/Bootstrap10x.png"
import mui_logo from "../../assets/icon/Material Ui10x.png"
import postman_logo from "../../assets/icon/Postman Api10x.png"
import react_logo from "../../assets/icon/React Native10x.png"
import node_logo from "../../assets/icon/Node Js10x.png"
import express_logo from "../../assets/icon/Express Js10x.png"
import sql_logo from "../../assets/icon/MySQL Logo10x.png"
import mongoDB_logo from "../../assets/icon/MongoDB10x.png"
import git_logo from "../../assets/icon/Git10x.png"
import github_logo from "../../assets/icon/GitHub10x.png"
import npm_logo from "../../assets/icon/NPM10x.png"
import vsCode_logo from "../../assets/icon/Visual Studio Code 201910x.png"
import intellij_logo from "../../assets/icon/IntelliJ IDEA10x.png"
import StackCard from "./StackCard";

class About extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-md ">
                    <div>
                        <div className="page-title position-relative">
                            <h3>About Me</h3>
                            <hr/>
                        </div>
                        <br/><br/>
                        <div className="d-flex justify-content-around align-items-center about-content-area">
                            <div className=" p-holder">
                                <p>
                                    A full-stack software developer working on java & javascript. Having a great passion
                                    in both back-end and front-end development, I can create API's and decent UI's. I am
                                    under graduated student in IJSE(Institute of Java & Software Engineering).
                                </p>
                                <br/>
                                <p>
                                    I am a motivated individual who likes to learn new things and is a quick learner. I
                                    am very passionate and enthusiastic about creating constructive and efficient
                                    solutions. I believe that having an open mind can help you remain creative and grasp
                                    ideas from any subject to implement it in your field!
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
                        <div className="page-title position-relative">
                            <h3>Known TechStack</h3>
                            <hr/>
                        </div>
                        <br/>
                        <p className="page-description">Technology i've worked & dabbled with</p>
                        <br/>
                        <div>
                            <div className="container-md">
                                <div className="d-flex flex-wrap justify-content-evenly">
                                    <StackCard logo={java_logo} skill="Java"/>
                                    <StackCard logo={python_logo} skill="Python"/>
                                    <StackCard logo={js_logo} skill="Java"/>
                                    <StackCard logo={html_logo} skill="HTML"/>
                                    <StackCard logo={css_logo} skill="CSS"/>
                                    <StackCard logo={spring_logo} skill="Spring"/>
                                    <StackCard logo={springboot_logo} skill="Springboot"/>
                                    <StackCard logo={bootstrap_logo} skill="Bootstrap"/>
                                    <StackCard logo={mui_logo} skill="Material UI"/>
                                    <StackCard logo={postman_logo} skill="Postman"/>
                                    <StackCard logo={react_logo} skill="React"/>
                                    <StackCard logo={node_logo} skill="Node.js"/>
                                    <StackCard logo={express_logo} skill="Express.js"/>
                                    <StackCard logo={sql_logo} skill="MySql"/>
                                    <StackCard logo={mongoDB_logo} skill="MongoDB"/>
                                    <StackCard logo={git_logo} skill="Git"/>
                                    <StackCard logo={github_logo} skill="GitHub"/>
                                    <StackCard logo={npm_logo} skill="Npm"/>
                                    <StackCard logo={vsCode_logo} skill="VS Code"/>
                                    <StackCard logo={intellij_logo} skill="Intellij"/>
                                </div>
                            </div>
                            <br/><br/><br/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}
export default About;