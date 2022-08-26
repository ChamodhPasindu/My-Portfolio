import {Fragment} from "react";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Certificate from "../pages/Certificate";


function App() {
    return (
        <Fragment>
            <Navbar/>
            <Home/>
            <About/>
            <Services/>
            <Projects/>
            <Certificate/>
        </Fragment>
    );
}

export default App;

