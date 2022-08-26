import {Component, Fragment} from "react";

class CertificateCard extends  Component{
    render() {
        return(
            <Fragment>
                <a href={this.props.img} target="_blank">
                    <img id="certificate-img"  src={this.props.img} alt=""/>
                </a>
            </Fragment>
        )
    }
}
export default CertificateCard