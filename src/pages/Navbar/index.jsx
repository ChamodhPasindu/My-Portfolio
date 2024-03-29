import {Component, Fragment} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./style.css"
import {Link} from "react-scroll"
import Aos from "aos";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: []
        }
    }

    componentDidMount() {
        Aos.init({duration: 2000});
    }

    changeActive = (e) => {
        const home = document.getElementById('home');
        const about = document.getElementById('about');
        const service = document.getElementById('service');
        const project = document.getElementById('project');
        const certificate = document.getElementById('certificate');
        const contact = document.getElementById('contact');
        this.setState({ids: [home, about, service, project, certificate, contact]})

        home.classList.remove("active")

        this.state.ids.map((id) => (
            id.classList.remove("active")

        ))
        e.currentTarget.classList.add("active")
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg sticky-top">
                    <div data-aos="fade-down" data-aos-once="true" className="container-xl mt-2">
                        <button className="bg-transparent fw-bolder fs-5 name-logo">
                            Chamodh
                        </button>
                        <button className="navbar-toggler"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon text-danger"/>
                        </button>
                        <div className="collapse navbar-collapse d-lg-flex justify-content-end mt-lg-0 mt-md-4 mt-sm-4 "
                             id="navbarNav">
                            <ul id="nav-list" className="navbar-nav">
                                <li className="nav-item ms-4">
                                    <Link id="home" className="nav-link active" to="top" duratoin={1000}
                                          onClick={this.changeActive}>HOME</Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link id="about" className="nav-link" to="about-me" duratoin={1000}
                                          onClick={this.changeActive}>ABOUT</Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link id="service" className="nav-link" to="services" duratoin={1000}
                                          onClick={this.changeActive}>SERVICES</Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link id="project" className="nav-link" to="projects" duratoin={1000}
                                          onClick={this.changeActive}>PROJECTS</Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link id="certificate" className="nav-link" to="certificates"
                                          duratoin={1000}
                                          onClick={this.changeActive}>CERTIFICATES</Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link id="contact" className="nav-link" to="contacts" duratoin={1000}
                                          onClick={this.changeActive}>CONTACTS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar