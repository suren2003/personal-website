import React from 'react';

const NavBar = ({ setActivePage }) => {
  return (
    <nav>
      <button onClick={() => setActivePage('Home')}>Home</button>
      <button onClick={() => setActivePage('About')}>About</button>
      <button onClick={() => setActivePage('Experience')}>Experience</button>
      <button onClick={() => setActivePage('Education')}>Education</button>
      <button onClick={() => setActivePage('Projects')}>Projects</button>
      <button onClick={() => setActivePage('Resume')}>Resume</button>

    </nav>
  );
};

export default NavBar;
