import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Socials from './Socials';
import './App.css';

const App = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate the offset position by subtracting navbar height
      const offsetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setNavbarVisible(true); // Ensure navbar is visible when navigating
    }
  };

  const handleScrollEvent = () => {
    const homeSection = document.getElementById('Home');
    const rect = homeSection.getBoundingClientRect();
    if (rect.bottom <= 0) {
      setNavbarVisible(true); // Show navbar when scrolled past the home section
    } else {
      setNavbarVisible(false); // Hide navbar when at the home section
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  // Calculate the navbar height when it becomes visible
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, [navbarVisible]); // Recalculate when navbar visibility changes

  return (
    <div>
      <NavBar handleScroll={handleScroll} navbarVisible={navbarVisible} />
      <main>
        <div id="Home" className="section">
          <Home handleScroll={handleScroll} />
        </div>
        <div id="About" className="section">
          <About />
        </div>
        <div id="Experience" className="section">
          <Experience />
        </div>
        <div id="Education" className="section">
          <Education />
        </div>
        <div id="Projects" className="section">
          <Projects />
        </div>
        <div id="Socials" className="section">
          <Socials />
        </div>
      </main>
    </div>
  );
};

export default App;
