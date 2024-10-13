import React from 'react';
import './NavBar.css'; // Include your CSS for the navbar

const NavBar = ({ handleScroll, navbarVisible }) => {
  return (
    <div className={`navbar ${navbarVisible ? 'visible' : ''}`}>
      <button onClick={() => handleScroll('Home')}>Home</button>
      <button onClick={() => handleScroll('About')}>About</button>
      <button onClick={() => handleScroll('Experience')}>Experience</button>
      <button onClick={() => handleScroll('Education')}>Education</button>
      <button onClick={() => handleScroll('Projects')}>Projects</button>
      <button onClick={() => handleScroll('Socials')}>Resume + Socials</button>
    </div>
  );
};

export default NavBar;
