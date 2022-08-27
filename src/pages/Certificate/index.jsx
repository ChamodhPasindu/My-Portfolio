import "./style.css"
import "../../index.css"
import React, {Component, Fragment} from "react";
import CertificateCard from "./CertificateCard";
import js from "../../assets/img/js.png"
import google from "../../assets/img/google.png"
import java from "../../assets/img/java.png"
import sql from "../../assets/img/sql.png"
import python from "../../assets/img/python.png"
import css from "../../assets/img/css.png"

class Certificate extends Component{
    render() {
        return(
            <Fragment>
                <div id="certificates" className="container-md">
                    <div className="page-title position-relative">
                        <h3>Certificates</h3>
                        <hr/>
                    </div>
                    <br/><br/><br/>
                    <div className="d-flex flex-wrap justify-content-evenly">
                        <CertificateCard link={"https://drive.google.com/drive/u/0/folders/1cL2uwJrwYKq_UcvuzJ-_bK_s2lYxW1Jd"} img={js}/>
                        <CertificateCard link={"https://drive.google.com/drive/u/0/folders/1cL2uwJrwYKq_UcvuzJ-_bK_s2lYxW1Jd"} img={python}/>
                        <CertificateCard link={"https://drive.google.com/drive/u/0/folders/1cL2uwJrwYKq_UcvuzJ-_bK_s2lYxW1Jd"} img={google}/>
                        <CertificateCard link={"https://drive.google.com/drive/u/0/folders/1cL2uwJrwYKq_UcvuzJ-_bK_s2lYxW1Jd"} img={java}/>
                        <CertificateCard link={"https://drive.google.com/drive/u/0/folders/1cL2uwJrwYKq_UcvuzJ-_bK_s2lYxW1Jd"} img={sql}/>
                        <CertificateCard link={"https://drive.google.com/drive/u/0/folders/1cL2uwJrwYKq_UcvuzJ-_bK_s2lYxW1Jd"} img={css}/>
                    </div>
                    <br/>
                    <div className="d-flex justify-content-center">
                        <a href="https://drive.google.com/drive/u/0/folders/1cL2uwJrwYKq_UcvuzJ-_bK_s2lYxW1Jd" target="_blank">
                            <button type="button" className="explore-more-btn">Explore more <i
                                className="bi bi-caret-right-fill"/><i
                                className="bi bi-caret-right-fill"/></button>
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Certificate