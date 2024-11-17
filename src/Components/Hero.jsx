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
        I love bringing brilliant and beautiful ideas to reality.  <br /> It is my passion.
        </p>

        <a href="mailto:joshadework@gmail.com">LET'S CHAT!</a>
      </section>
      <img src={heroimg} alt="" />
    </div>
  );
}

export default Hero;
