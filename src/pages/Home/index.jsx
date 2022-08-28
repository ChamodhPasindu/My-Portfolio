import {Component, Fragment} from "react";
import "./style.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import my_img from "../../assets/img/my-img.jpg"
import grid_design from "../../assets/img/grid-design.png"

import Aos from "aos"
import "aos/dist/aos.css"
import {Link} from "react-scroll"


class Home extends Component {

    componentDidMount() {
        Aos.init({duration:2000});
    }


    render() {
        return (
            <Fragment>
                <div id="hero"  className="container-md home-viewport-custom d-flex justify-content-around align-items-center">
                    <div data-aos="fade-down-right" className="home-social-box  d-flex flex-column align-items-center justify-content-center">
                        <div  className="div-social-link d-flex flex-column align-items-center justify-content-evenly">
                            <div>
                                <a href="https://github.com/ChamodhPasindu" target="_blank" rel="noreferrer">
                                    <i id="github" className="bi bi-github"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://twitter.com/chamodh_pasindu" target="_blank" rel="noreferrer">
                                    <i id="twitter" className="bi bi-twitter"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/chamodh-pasindu-9b6178217/" target="_blank" rel="noreferrer">
                                    <i id="linkedin" className="bi bi-linkedin"/>
                                </a>

                            </div>
                        </div>
                        <div className="empty-line-div">

                        </div>
                        <div className="div-follow-me position-relative">
                            <h5 className="position-absolute">Follow Me</h5>
                        </div>
                    </div>
                    <div data-aos="fade-down-right" className="home-hello-box d-flex flex-row align-items-center">
                        <div>
                            <h4>Hello! I am</h4>
                            <h1>Chamodh pasindu.</h1>
                            <h2>Full Stack Developer</h2>
                            <p>I'm currently focused on expanding my experience designing and developing high performing
                                websites.</p>
                            <Link duratoin={2000} to="contacts">
                                <button type="button" className="btn">Get In Touch</button>
                            </Link>
                        </div>
                    </div>
                    <div data-aos="fade-down-left" className="home-photo-box  position-relative">
                        <img id="home-grid-img-design" src={grid_design} alt="grid design"/>
                        <img id="home-my-photo-design" src={my_img} alt="me"/>
                        <div id="home-img-design"/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;