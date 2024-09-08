import React from "react";
import "../App.css";
import logo from "../assets/Logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />

      <nav>
        <div>
          <a href="" id="green">
            &lt; Home &gt;
          </a>
          <a href="">Who am I</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>

        <button>Resumé</button>
      </nav>
    </header>
  );
}

export default Header;
