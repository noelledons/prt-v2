import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Contact from "../src/pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
