import React from "react";
import MainBanner from "../../components/Sections/MainBanner/MainBanner";
import About from "../../components/Sections/About/About";
import Skills from "../../components/Sections/Skills/Skills";
import Contact from "../../components/Sections/Contact/Contact";

const Home = () => {
  return (
    <div className="home-container">
      <MainBanner />
      <About />
      <Skills/>
      <Contact/>
    </div>
  );
};

export default Home;
