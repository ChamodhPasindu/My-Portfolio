import React, {Component, Fragment} from "react";
import "../style.css"

class ProjectCard extends Component {
    render() {
        return (
            <Fragment>
                <div data-aos="zoom-in" className="project-card">
                    <img src={this.props.img} alt=""/>
                    <h1 className="me-3 ms-3">
                        {this.props.title}
                    </h1>
                    <div className="project-paragraph me-3 ms-3">
                        <p>
                            {this.props.paragraph}
                        </p>
                    </div>
                    <div className="d-flex justify-content-between ps-4 pe-4 flex-row">
                        <a href={this.props.link} target="_blank" rel="noreferrer">
                            <i className="github-project-icon bi bi-github"/>
                        </a>
                        <div className="tech-name d-flex align-items-center justify-content-end flex-row">
                            <p>{this.props.first}</p>
                            <p>{this.props.second}</p>
                            <p>{this.props.third}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ProjectCard