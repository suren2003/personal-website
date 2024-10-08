import React, { useState } from 'react';
import './Experience.css'; // Include custom CSS

const Experience = () => {
    // State to track which box is clicked (null means no box is selected)
    const [selectedBox, setSelectedBox] = useState(null);

    // Data for your experiences with details as a list
    const experienceData = [
        {
            title: "5G Baseband Software Developer Intern",
            company: "Ericsson",
            dates: "May 2024 - Present",
            brief: "My focus was put on developing an internal tool, baseband software, and an testing framework to emulate hardware testing.",
            tech: "C/C++, Python, YAML, 5G NR, Agile, Git",
            resume: (
                <ul>
                    <li>Developed features to enable sub-argument-driven configuration selection, simplify configuration process, and sup-
                    port to generate multiple testcases for a Python tool that does automated YAML test case generations</li>
                    <li>Optimized product code by refactoring complex C/C++ sections flagged by CodeScene and vigorously testing
                    solutions to ensure code quality without breaking the current system</li>
                </ul>
            )
        },
        {
            title: "Software Test Specialist Intern",
            company: "Nokia",
            dates: "Jan 2024 - April 2024",
            brief: "This is my second term in this position with Nokia. Because of my previous term, I built up trust and was given more responsibilities. This included the migration of multiple test suites into the newly React based web app and verification of bug fixes by devs.",
            tech: "JavaScript, Node.js, MochaJS, YAML, Postman, OpenStack, Agile, Git",
            resume: (
                <ul>
                    <li>Enhanced test coverage of web app by migrating 13 test suites by redeveloping and updating test suites to be
                    compatible with newly transitioned React based web app using JavaScript, Node.js and MochaJS</li>
                    <li>Verified the successful implementation of bug fixes by conducting thorough manual testing across various scenarios
                    and environments</li>
                </ul>
            )
        },
        {
            title: "Software Test Specialist Intern",
            company: "Nokia",
            dates: "May 2023 - Sept 2023",
            brief: "This was my first internship position where I gained lots of great professional experience. I mainly focused on finding and fixing issues from regression test reports.",
            tech: "JavaScript, Node.js, MochaJS, YAML, Postman, OpenStack, Agile, Git",
            resume: (
                <ul>
                    <li>Contributed to the test automation and regression testing of Nokia’s NSP web application using JavaScript, Node.js,
                    and MochaJS</li>
                    <li>Enhanced product quality and stability by resolving 10+ product defects identified in regression tests by utilizing
                    debugging techniques and core web principals on the test automation code and web app</li>
                </ul>
            )
        }
    ];

    return (
      <div className="experience">
        <h1 className="title">Experience</h1>
        <div className="experience-container">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className="experience-box"
              onClick={() => setSelectedBox(experience)} // Open the modal with selected experience details
            >
              <h2>{experience.title}</h2>
              <p><b>{experience.company}</b>, {experience.dates}</p>
            </div>
          ))}
        </div>

        {/* Modal component that shows more details */}
        {selectedBox && (
          <div className="modal-overlay" onClick={() => setSelectedBox(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h2>{selectedBox.title}</h2>
              <p><b>{selectedBox.company}</b>, {selectedBox.dates}</p>
              <p class="brief">
                {selectedBox.brief}
              </p>
              <p className="tech">
                <span className="tech-label">Tech, Tools & Concepts: </span>
                {selectedBox.tech}
              </p>
              {selectedBox.resume}  
              <button onClick={() => setSelectedBox(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
};

export default Experience;
