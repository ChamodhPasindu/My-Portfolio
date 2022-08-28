import {Component, Fragment} from "react";

class ContactInfo extends Component {
    render() {
        return (
            <Fragment>
                <div className="contact-info-card">
                    <div className="icon-div">
                        {this.props.icon}
                    </div>
                    <div className="info-holder">
                        <div>
                            <h4>{this.props.title}</h4>
                        </div>
                        <h5>
                            {this.props.detail}
                        </h5>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContactInfo