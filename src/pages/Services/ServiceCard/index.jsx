import React, {Component, Fragment} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

class ServiceCard extends Component {
    render() {
        return (
            <Fragment>
                <div data-aos="zoom-in" className="service-card text-center">
                    <div className="service-icon ">
                        {this.props.icon}
                    </div>
                    <div className="service-title-div ">
                        <h1>
                            {this.props.title}
                        </h1>
                    </div>
                    <div className="service-paragraph-div mt me-3 ms-3">
                        <p>
                            {this.props.paragraph}
                        </p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ServiceCard