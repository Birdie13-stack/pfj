import React from "react";
import heroimg from "../assets/heroimg.png";

function Hero() {
  return (
    <div className="hero">
      <section className="text">
        <span>Full-Stack Developer</span>

        <h1>
          Talk is Cheap. <br /> Show me the code
        </h1>

        <p>
          I design and code beautiful, simple things. <br /> This is what I love
          to do.
        </p>

        <a href="">LET'S CHAT!</a>
      </section>
      <section className="images">
        <img src={heroimg} alt="" />
      </section>
    </div>
  );
}

export default Hero;
