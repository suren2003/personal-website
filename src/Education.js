import React from 'react';
import './Education.css'; // Include custom CSS for height control

const Education = () => {
    return (
      <div className="education">
        <h1 className="title">Education</h1>
        <div className="education-section">
          <div className="gif-side">
            <img src={`${process.env.PUBLIC_URL}/education.gif`} alt="Education GIF" />
          </div>
          <div className="education-side">
            <div className="degree-info">
              <p className="degree-title"><b>Bachelor of Engineering in Computer Systems</b>, Co-Op Option</p>
              <div className="degree-sub-info">
                <p><b>Carleton University</b>, Ottawa, Ontario</p>
                <p>Expected Graduation: April 2026</p>
              </div>
            </div>
            <p><b>GPA: 4.0</b> | Dean’s Honour List</p>
            <p>Relevant Courses:</p>
            <ul className="courses-grid">
                <li>Algorithms and Data Structures</li>
                <li>Object-Oriented Software Development (Java)</li>
                <li>Real-Time Systems (C)</li>
                <li>Operating Systems (Linux/Unix & C)</li>
                <li>Computer Organization and Architecture</li>
                <li>Multivariable Calculus</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Education;
