
import github from "../assets/github.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import lin from "../assets/lin.png";

function Footer() {
  return (
    <div className="footer" id="contact">
      <p>Contact Info</p>

      <div className="contact">
        <p>
          <img src={github} alt="" />
          <a target="_blank" href="https://github.com/dart-josh">Github</a>
        </p>
        <p>
          <img src={mail} alt="" />
          <a href="mailto:joshadework@gmail.com">joshadework@gmail.com</a>
        </p>
        <p>
          <img src={phone} alt="" />
          <a target="_blank" href="https://wa.me/9015153464">+234 (901) 515-3464</a>
        </p>
        <p>
          <img src={lin} alt="" />
          <a target="_blank" href="www.linkedin.com/in/adelooye-joshua-3b66b1159">Linkedin</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
