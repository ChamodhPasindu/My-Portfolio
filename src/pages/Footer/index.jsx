import "./style.css"
import {Component, Fragment} from "react";

class Footer extends Component{
    render() {
        return(
            <Fragment>
                <div className="footer-div">
                    <div className="text-center ps-1 pe-1">
                        <h6>Designed and Developed by <b>Chamodh Pasindu</b>.</h6>
                        <h6>Built with <span>React.js</span> & <span>Bootstrap</span>. Hosted on <span>Github Pages</span>.</h6>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Footer