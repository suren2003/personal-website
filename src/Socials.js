import React from 'react';
import './Socials.css'; // Ensure your CSS file is updated accordingly

const Socials = () => {
  return (
    <div className="socials-container">
      <h1 className="socials-header">Connect with Me</h1>
      <div className="logos-container">
        {/* LinkedIn logo link */}
        <a href="https://www.linkedin.com/in/suren-kulasegaram" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/linkedin-logo.png`} alt="LinkedIn" className="logo" />
        </a>
        
        {/* GitHub logo link */}
        <a href="https://github.com/suren2003" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/github-logo.png`} alt="GitHub" className="logo" />
        </a>
      </div>
      <div className="buttons-container">
        {/* Button for viewing the resume */}
        <a href={`${process.env.PUBLIC_URL}/Resume_Suren_Kulasegaram.pdf`} target="_blank" rel="noopener noreferrer">
          <button className="social-button">View My Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Socials;
