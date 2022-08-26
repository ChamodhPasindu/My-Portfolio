import {Fragment} from "react";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Certificate from "../pages/Certificate";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";


function App() {
    return (
        <Fragment>
            <Navbar/>
            <Home/>
            <About/>
             <Services/>
            <Projects/>
            <Certificate/>
            <Contact/>
            <Footer/>
        </Fragment>
    );
}

export default App;

