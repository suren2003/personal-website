import React from 'react';
import './Projects.css'; // Uncomment this if you have your CSS file for styles

const Projects = () => {
    const projects = [
        {
            title: "Project Title 1",
            description: "Brief description of the project, what technologies were used, and what was accomplished.",
            technologies: "HTML, CSS, JavaScript",
        },
        {
            title: "Project Title 2",
            description: "Brief description of the project, what technologies were used, and what was accomplished.",
            technologies: "React, Node.js",
        },
        {
            title: "Project Title 3",
            description: "Brief description of the project, what technologies were used, and what was accomplished.",
            technologies: "Python, Django",
        },
        // Add more projects as needed
    ];

    return (
        <section id="Projects" className="section">
            <h2 className="title">Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-box">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <p className="tech-used"><span className="tech-label">Technologies:</span> {project.technologies}</p>
                        <button className="view-project-button" onClick={() => openModal(`project${index + 1}`)}>View Project</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

// Example function to handle modal opening (you can implement the modal logic as needed)
const openModal = (projectId) => {
    // Your logic to open the modal goes here
    console.log(`Open modal for ${projectId}`);
};
