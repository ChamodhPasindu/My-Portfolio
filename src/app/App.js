import {Fragment} from "react";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";

function App() {
    return (
        <Fragment>
            <Navbar/>
            <Home/>
            <About/>
        </Fragment>
    );
}

export default App;

