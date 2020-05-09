import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const displayDropdownMenu = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };

  window.onclick = function(event) {
    if (
      !event.target.matches(".navbar-toggle") &&
      !event.target.matches(".menu-svg")
    ) {
      var dropdowns = document.getElementsByClassName("navbar-dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <header className="My-Site-header">
      <div className="yoursTruly">
        <span className="name center-piece" alt="Name">
          Deonté J Cooper
        </span>
        <span className="occupation center-piece" alt="Occupation">
          Software Engineer
        </span>
      </div>
      <div className="navbar center-piece">
        <nav className="center-piece visible@m" alt="Navbar">
          <NavLink to="/bio" className="nav" alt="Bio Link">
            {" "}
            Bio{" "}
          </NavLink>
          <hr></hr>
          <NavLink to="/projects" className="nav" alt="Projects Link">
            {" "}
            Projects{" "}
          </NavLink>
          <hr></hr>
          <NavLink to="/soundcloud" className="nav" alt="SoundCloud Link">
            {" "}
            SoundCloud{" "}
          </NavLink>
          <hr></hr>
          <NavLink to="/blog" className="nav" alt="Blog Link">
            {" "}
            Blog{" "}
          </NavLink>
          <hr></hr>
          <NavLink to="/contact" className="nav" alt="Contact Link">
            {" "}
            Contact{" "}
          </NavLink>
        </nav>
        <nav className="center-piece hidden@m dropdown" alt="Navbar">
          <button
            onClick={displayDropdownMenu}
            className="navbar-toggle"
            alt="Navigation Dropdown Menu Button"
          >
            <svg
              width="60"
              height="30"
              viewBox="0 0 60 40"
              xmlns="http://www.w3.org/2000/svg"
              className="menu-svg"
            >
              <rect
                y="9"
                width="60"
                height="6"
                style={{ fill: "rgb(255,255,255)" }}
                className="menu-svg"
              ></rect>
              <rect
                y="18"
                width="60"
                height="6"
                style={{ fill: "rgb(255,255,255)" }}
                className="menu-svg"
              ></rect>
              <rect
                y="27"
                width="60"
                height="6"
                style={{ fill: "rgb(255,255,255)" }}
                className="menu-svg"
              ></rect>
            </svg>
          </button>
          <div
            id="myDropdown"
            className="navbar-dropdown"
            alt="Navigation Dropdown Menu"
          >
            <ul>
              <li className="nav">
                <NavLink to="/bio" className="nav" alt="Bio Link">
                  {" "}
                  Bio{" "}
                </NavLink>
              </li>
              <hr className="dropdown-divider"></hr>
              <li className="nav">
                <NavLink to="/projects" className="nav" alt="Projects Link">
                  {" "}
                  Projects{" "}
                </NavLink>
              </li>
              <hr className="dropdown-divider"></hr>
              <li className="nav">
                <NavLink to="/soundcloud" className="nav" alt="SoundCloud Link">
                  {" "}
                  SoundCloud{" "}
                </NavLink>
              </li>
              <hr className="dropdown-divider"></hr>
              <li className="nav">
                <NavLink to="/blog" className="nav" alt="Blog Link">
                  {" "}
                  Blog{" "}
                </NavLink>
              </li>
              <hr className="dropdown-divider"></hr>
              <li className="nav">
                <NavLink to="/contact" className="nav" alt="Contact Link">
                  {" "}
                  Contact{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
