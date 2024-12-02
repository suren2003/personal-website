import React, { useState, useEffect, useRef } from "react";
import "./NavBar.css"; // Include your CSS for the navbar

const NavBar = ({ handleScroll, navbarVisible }) => {
  const [menuActive, setMenuActive] = useState(false);
  const navbarRef = useRef(null); // Reference for navbar to detect clicks outside

  // Toggle menu visibility when hamburger is clicked
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Close menu when a menu item is clicked
  const closeMenu = (section) => {
    handleScroll(section); // Call the handleScroll function with the section name
    setMenuActive(false); // Close the menu
  };

  // Close menu when clicking outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuActive(false); // Close the menu if click is outside navbar
      }
    };

    // Add event listener on component mount
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className={`navbar ${navbarVisible ? "visible" : ""} ${
        menuActive ? "mobile-menu-active" : ""
      }`}
    >
      <button onClick={() => closeMenu("Home")}>Home</button>
      <button onClick={() => closeMenu("About")}>About</button>
      <button onClick={() => closeMenu("Experience")}>Experience</button>
      <button onClick={() => closeMenu("Education")}>Education</button>
      <button onClick={() => closeMenu("Projects")}>Projects</button>
      <button onClick={() => closeMenu("Socials")}>Resume + Socials</button>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
