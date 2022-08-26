import {Fragment} from "react";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";


function App() {
    return (
        <Fragment>
            <Navbar/>
            <Home/>
            <About/>
            <Services/>
        </Fragment>
    );
}

export default App;

