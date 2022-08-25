import React, {Component} from "react";

class StackCard extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="mb-3 stack-card text-center">
                <div style={{width:"40%"}}>
                    <img src={this.props.logo} alt="java logo"/>
                </div>
                <div className="" style={{width:"50%"}} >
                    <p className="me-3">{this.props.skill}</p>
                </div>
            </div>
        )
    }

}
export default StackCard