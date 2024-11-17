
import code from "../assets/code-icon.png";

function About() {
  return (
    <div className="about" id="about">
      <section className="left">
        <div>
          <h2>Mobile App</h2>
          <img src={code} alt="" />
          <p>Creating mobile apps using a robust framework  that can run seamlessly across multiple devices.</p>
        </div>
        <div>
          <h2>Full-Stack Software</h2>
          <img src={code} alt="" />
          <p>
          Developing full-stack applications with clean and scalable code for both client-side user interfaces and server-side logic, managing databases, and integrating different technologies.
          </p>
        </div>
        <div>
          <h2>Desktop App</h2>
          <img src={code} alt="" />
          <p>Using modern technologies to create fast and efficient Desktop software that is both elegant and beautiful.</p>
        </div>
      </section>
      <div className="right">
        <p>Who am I?</p>

        <h2 className="intro">Hello! I'm Joshua Adelooye</h2>

        <p>
        I am a self-taught developer who is passionate about creating responsive, visually pleasing, and user-friendly software through the use of clean, sophisticated, and easily maintainable code.
        </p>

        <p>When I'm not behind the screen, I love learning and trying out new things.</p>

        <p>Here are a few technologies I work with:</p>

        <div className="lists">
          <ul>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>Flutter (Dart)</li>
            <li>HTML & CSS</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Firebase</li>
          </ul>
          <ul>
            <li>Node Js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>PHP</li>
            <li>C#</li>
            
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
