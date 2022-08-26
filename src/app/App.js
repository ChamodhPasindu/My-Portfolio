import {Fragment} from "react";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";


function App() {
    return (
        <Fragment>
            <Navbar/>
            <Home/>
            <About/>
            <Services/>
            <Projects/>
        </Fragment>
    );
}

export default App;

