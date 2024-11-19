import React from "react";
import "./About.css"; // Optional: include styles for your About component

const About = () => {
  return (
    <div className="about">
      <h2 className="title">About Me</h2>
      <div className="about-section">
        <div className="image-side">
          <img
            src={`${process.env.PUBLIC_URL}/selfie.jpg`}
            alt="pic of me :)"
          />
        </div>
        <div className="about-side">
          <p>
            Hi, I'm Suren! I'm a developer with experience in embedded systems
            and test automation, and I'm currently looking to transition into
            full-stack development. I love solving complex problems and creating
            solutions that work well in real-world applications. When I'm not
            coding, I stay active with sports like hockey, soccer, and
            basketball. These sports have taught me the value of teamwork, quick
            thinking, and persistence—skills that I bring into my development
            work. I thrive in environments that challenge me and am always
            excited to tackle new problems.
          </p>
          <ul className="contact-list">
            <li>Computer Systems Engineer at Carleton University</li>
            <li>Email: surenkulasegaram@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
