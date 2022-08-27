import {Component, Fragment} from "react";

class CertificateCard extends  Component{
    render() {
        return(
            <Fragment>
                <a data-aos="zoom-in" className="position-relative" href={this.props.img} target="_blank">
                    <img id="certificate-img"  src={this.props.img} alt=""/>
                    <div className="blur-slider">
                    </div>

                </a>
            </Fragment>
        )
    }
}
export default CertificateCard