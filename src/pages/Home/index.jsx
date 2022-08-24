import {Component, Fragment} from "react";
import "./style.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import my_img from "../../assets/img/my-img.jpg"
import grid_design from "../../assets/img/grid-design.png"

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-md home-viewport-custom d-flex justify-content-around align-items-center">
                    <div className="home-social-box  d-flex flex-column align-items-center justify-content-center">
                        <div className="div-social-link d-flex flex-column align-items-center justify-content-evenly">
                            <div>
                                <i id="github" className="bi bi-github"/>
                            </div>
                            <div>
                                <i id="twitter" className="bi bi-twitter"/>
                            </div>
                            <div>
                                <i id="linkedin" className="bi bi-linkedin"/>
                            </div>
                        </div>
                        <div className="empty-line-div">

                        </div>
                        <div className="div-follow-me position-relative">
                            <h5 className="position-absolute">Follow Me</h5>
                        </div>
                    </div>
                    <div className="home-hello-box d-flex flex-row align-items-center">
                        <div>
                            <h4>Hello! I am</h4>
                            <h1>Chamodh pasindu.</h1>
                            <h2>Full Stack Developer</h2>
                            <p>I'm currently focused on expanding my experience designing and developing high performing
                                websites.</p>
                            <button type="button" className="btn">Get In Touch</button>
                        </div>
                    </div>
                    <div className="home-photo-box  position-relative">
                        <img id="home-grid-img-design" src={grid_design} alt="grid design"/>
                        <img id="home-my-photo-design" src={my_img} alt="my photo"/>
                        <div id="home-img-design"/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;