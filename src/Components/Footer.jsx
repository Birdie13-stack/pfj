import React from "react";
import github from "../assets/github.png";
import medium from "../assets/medium.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import lin from "../assets/lin.png";

function Footer() {
  return (
    <div className="footer">
      <p>Contact Info</p>

      <div className="contact">
        <p>
          <img src={github} alt="" />
          <a href="">Github</a>
        </p>
        <p>
          <img src={medium} alt="" />
          <a href="">Medium</a>
        </p>
        <p>
          <img src={mail} alt="" />
          <a href="joshadework@gmail.com">Email</a>
        </p>
        <p>
          <img src={phone} alt="" />
          <a href="">+2349015153464</a>
        </p>
        <p>
          <img src={lin} alt="" />
          <a href="">Linkedin</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
