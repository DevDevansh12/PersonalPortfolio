import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Skills from "./Pages/Skills";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
