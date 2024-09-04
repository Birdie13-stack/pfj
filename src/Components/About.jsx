import React from "react";
import code from "../assets/code-icon.png";

function About() {
  return (
    <div className="about">
      <section className="left">
        <div>
          <h2>Mobile App</h2>
          <img src={code} alt="" />
          <p>Mobile App created using Flutter</p>
        </div>
        <div>
          <h2>Front-end</h2>
          <img src={code} alt="" />
          <p>
            Front-end App created using Flutter, context API and Styled
            Components
          </p>
        </div>
        <div>
          <h2>Desktop App</h2>
          <img src={code} alt="" />
          <p>Mobile App created using Flutter</p>
        </div>
      </section>
      <div className="right">
        <p>Who am I?</p>

        <h2 className="intro">Hello! I'm Joshua Adelooye</h2>

        <p>
          I'm a self taught developer passionateg in building responsive,
          beuatiful and accessible apps using clean and elegant code.
        </p>

        <p>When I'm not behind the screen, I love playing guitar.</p>

        <p>Here are a few technologies I've been working with lately:</p>

        <div className="lists">
          <ul>
            <li>HTML % CSS</li>
            <li>Bootstrap</li>
            <li>Electron Js</li>
            <li>React Native</li>
            <li>Node Js</li>
          </ul>
          <ul>
            <li>Sass</li>
            <li>Javascript</li>
            <li>React Js</li>
            <li>Next Js</li>
            <li>Typescript</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
