import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about">
        <div className="about__image">
          <p> insert image here</p>
        </div>
        <div className="about__description">
          <p>
            {" "}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit,{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
