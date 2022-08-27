import {Fragment, useEffect, useState} from "react";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Certificate from "../pages/Certificate";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import {HashLoader, ScaleLoader} from "react-spinners";


function App() {
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },2000);
    },[]);

    return (
        <Fragment>
            <div>
                {loading?(
                    <HashLoader className="loading-spinner" color={"#7C5EF2"}   size={90} />
                ):(
                    <div>
                        <Navbar about-id="#about"/>
                        <Home />
                       <About id="about"/>
                        <Services/>
                        <Projects/>
                        <Certificate/>
                        <Contact/>
                        <Footer/>
                    </div>
                )}
            </div>

        </Fragment>
    );

}

export default App;

