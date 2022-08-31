import React, {Component, Fragment} from "react";

class StackCard extends Component {
    render() {
        return (
            <Fragment>
                <div  className="mb-3 stack-card text-center">
                    <div style={{width: "40%"}}>
                        <img src={this.props.logo} alt="java logo"/>
                    </div>
                    <div className="" style={{width: "50%"}}>
                        <p className="me-3">{this.props.skill}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default StackCard