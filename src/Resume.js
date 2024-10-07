import React from 'react';
import './Resume.css'; // Include custom CSS for height control


const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-header">My Resume</h1>
      <iframe
        src={`${process.env.PUBLIC_URL}/Resume_Suren_Kulasegaram.pdf`}
        className="resume-frame"
        title="Resume"
      />
    </div>
  );
};

export default Resume;