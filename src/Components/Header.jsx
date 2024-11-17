import React from "react";
import "../App.css";
import logo from "../assets/Logo.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/">
          Joshua <span>Adelooye</span>
        </a>
      </div>

      <nav>
        <div>
          <a href="" id="green">
            &lt; Home /&gt;
          </a>
          <a href="#about">Who am I</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={() => window.open("https://drive.google.com/file/d/1fX-zEY4-JPJ9r8sDq99sgF-Kald7PaWN/view?usp=drive_link")}>Resumé</button>
      </nav>
    </header>
  );
}

export default Header;
