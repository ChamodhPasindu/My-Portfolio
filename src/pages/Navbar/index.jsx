import {Component, Fragment} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./style.css"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: []
        }
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

        {
            this.state.ids.map((id) => (
                id.classList.remove("active")

            ))
        }
        e.currentTarget.classList.add("active")
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg sticky-top">
                    <div className="container-xl mt-2">
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
                                    <a id="home" className="nav-link active" href="#"
                                       onClick={this.changeActive}>HOME</a>
                                </li>
                                <li className="nav-item ms-4">
                                    <a id="about" className="nav-link " href="#" onClick={this.changeActive}>ABOUT</a>
                                </li>
                                <li className="nav-item ms-4">
                                    <a id="service" className="nav-link" href="#"
                                       onClick={this.changeActive}>SERVICES</a>
                                </li>
                                <li className="nav-item ms-4">
                                    <a id="project" className="nav-link" href="#"
                                       onClick={this.changeActive}>PROJECTS</a>
                                </li>
                                <li className="nav-item ms-4">
                                    <a id="certificate" className="nav-link" href="#"
                                       onClick={this.changeActive}>CERTIFICATES</a>
                                </li>
                                <li className="nav-item ms-4">
                                    <a id="contact" className="nav-link" href="#"
                                       onClick={this.changeActive}>CONTACTS</a>
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