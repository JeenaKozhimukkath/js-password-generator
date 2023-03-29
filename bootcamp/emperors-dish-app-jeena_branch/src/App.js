import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
//import Home from "./pages/Home";
import Menu from "./pages/Menu";


function App() {
    return (
        <div className="App">
            <Nav />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
