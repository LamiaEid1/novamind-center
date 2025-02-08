import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
