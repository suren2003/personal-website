import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Resume from './Resume';

const App = () => {
  const [activePage, setActivePage] = useState('Home'); // Track the current page

  const renderContent = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Experience':
        return <Experience />;
      case 'Education':
        return <Education />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />; 
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <NavBar setActivePage={setActivePage} />
      <main>{renderContent()}</main>
    </div>
  );
};

export default App;
