import React, { useState } from "react";
import "./Projects.css"; // Include your CSS file for custom styles

const Projects = () => {
  // State to track which project is selected
  const [selectedProject, setSelectedProject] = useState(null);

  // Data for projects
  const projects = [
    {
      title: "Lego Sorting Machine",
      description:
        "An automated system that sorts Lego pieces by color using computer vision, conveyor mechanics, and dynamic bin sorting. The project combines hardware integration with full-stack software to create a simple, user-friendly, and cost-effective solution that transforms a traditionally manual task into an efficient automated workflow.",
      technologies:
        "Python, OpenCV, Flask, SQLite, React, Node.js, gRPC, Firebase, Raspberry Pi",
      details: (
        <ul>
          <li>5 person team project for SYSC 3010</li>
          <li>
            Architected and developed a fully automated color-based Lego sorting
            system, integrating computer vision (OpenCV), conveyor mechanics,
            and a dynamic bin system to transform a traditionally manual process
            into an efficient, scalable workflow.
          </li>
          <li>
            Built a user-centric full-stack interface with Flask (Python,
            SQLite) and React/Node.js, enabling real-time system configuration,
            operational control, and live inventory tracking of sorted Lego
            pieces.
          </li>
          <li>
            Integrated Firebase for persistent, cloud-backed inventory tracking,
            ensuring session-to-session consistency and enabling future
            scalability to multi-device deployments.
          </li>
          <li>
            <a
              href="https://youtu.be/Qx0oTBa_ln0"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo Video
            </a>
          </li>
        </ul>
      ),

      githubURL: "https://github.com/suren2003/SYSC3010-Lego-Sorting-System",
    },
    {
      title: "Concurrent Multithreaded Elevator Control System",
      description:
        "A sophisticated, real-time concurrent elevator control system built in C++, featuring modular subsystems—Scheduler, Elevator, Floor, GUI—that communicate through UDP messaging, manage passenger capacity, process dynamic ride requests, and run across distributed processes with logging and fault handling.",
      technologies:
        "C++, UDP (DatagramSockets), Multithreading, FSM, Real-time Simulation, Unit Testing",
      details: (
        <ul>
          <li>4 person team project for SYSC 3303</li>
          <li>
            Engineered a modular, multithreaded elevator control system with
            distinct subsystems (Scheduler, Elevator, Floor, GUI) communicating
            via UDP DatagramSockets, enabling distributed deployment and
            inter-process coordination.
          </li>
          <li>
            Added real-time features—passenger capacity limits, request retry
            logic, and timing instrumentation—to simulate realistic elevator
            behavior, fault scenarios, and dynamic load handling.
          </li>
          <li>
            Developed comprehensive unit testing across core modules and
            visualization diagrams (state machines, sequence, timing) to ensure
            correctness, maintainability, and clear system documentation.
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dq5pUf0XNOk"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo Video
            </a>
          </li>
        </ul>
      ),
      githubURL: "https://github.com/suren2003/SYSC3303-Elevator",
    },
    {
      title: "Operating System Scheduler",
      description:
        "This is an simplified emulation of the Linux Completely Fair Share scheduling policy developed in C. This scheduler provides a simple visual to demonstrate how the Completely Fair Scheduler works. We use a text file that we read from to simulate all the processes we have and need to work with.",
      technologies: "C, pthreads",
      details: (
        <ul>
          <li>Based on Linux Completely Fair Scheduler</li>
          <li>Uses Producer/Consumer model using threads</li>
          <li>
            Threads 1 - 4 are the Consumer CPU threads, which execute the tasks
          </li>
          <li>
            Thread 0 is the Producer which adds tasks to the queues of the cpus
          </li>
        </ul>
      ),
      githubURL: "https://github.com/suren2003/Operating-System-Scheduler",
    },
    {
      title: "Task Management Discord Bot",
      description:
        "This project creates a Discord bot using Node.js to integrate Notion and Discord APIs.",
      technologies: "JavaScript, Node.js, Notion & Discord API",
      details: (
        <ul>
          <li>Fetches and parses data from Notion's API (calendar database)</li>
          <li>
            Sends task notifications to a designated Discord channel using
            Discord's API
          </li>
          <li>
            Automates weekly task updates using the node-cron library for
            precise scheduling
          </li>
        </ul>
      ),
      githubURL: "https://github.com/suren2003/Discord-Bot",
    },
    {
      title: "Dataset Analyzer",
      description:
        "The project contains a single program which allows the user to load a Google Books dataset (CSV file) and then analyze the dataset in a variety of different ways.",
      technologies: "Python",
      details: (
        <ul>
          <li>Group project from coursework, where I was team lead</li>
          <li>It allows the user to add or remove books from the dataset</li>
          <li>
            It allows the user to search the dataset by book title, rating,
            author, publisher, category, category and title, or category and
            rating
          </li>
          <li>
            It allows the user to view the books in the dataset sorted by page
            count (ascending) or rating (ascending or descending), or sorted
            alphabetically by title, publisher name, or category
          </li>
          <li>
            It allows the user to view the number of books in a category, the
            categories containing books written by a specified author, or the
            categories that a specified book falls into
          </li>
        </ul>
      ),
      githubURL:
        "https://github.com/suren2003/Interactive-Google-Books-Dataset-Analyzer",
    },
    {
      title: "Space Invaders",
      description:
        "Recreation of Space Invaders, but the main character is Naruto and throws out his kunais and the ninjas.",
      technologies: "Python, pygame",
      details: (
        <ul>
          <li>
            Designed and implemented game mechanics including dynamic difficulty
            scaling, collision detection, and score tracking
          </li>
          <li>
            Features simple controls: arrow keys to move and spacebar to shoot
          </li>
          <li>
            It’s a fun little project to learn and experiment with game
            development basics!
          </li>
        </ul>
      ),
      githubURL: "https://github.com/suren2003/Space-Invader-Game",
    },
  ];

  return (
    <div className="projects">
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-box"
            onClick={() => setSelectedProject(project)} // Open modal with selected project details
          >
            <h2>{project.title}</h2>
            <p className="tech">
              <b>Technologies:</b> {project.technologies}
            </p>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p className="description">{selectedProject.description}</p>
            <p className="tech">
              <b>Technologies:</b> {selectedProject.technologies}
            </p>
            <div className="details">{selectedProject.details}</div>
            <div className="logos-container">
              {/* GitHub logo link */}
              <a
                href={selectedProject.githubURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/github-logo.png`}
                  alt="GitHub"
                  className="logo"
                />
              </a>
            </div>
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
