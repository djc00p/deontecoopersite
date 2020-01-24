import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Bio from "./Bio";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <main className="My-Site">
      <header className="My-Site-header">
        <div className="yoursTruly">
          <span className="name center-piece" alt="Name">
            Deonté J Cooper
          </span>
          <span className="occupation center-piece" alt="Occupation">
            Software Engineer
          </span>
        </div>
        <div className="navbar center-piece ">
          <nav className="center-piece">
            <NavLink to="/bio" className="nav">
              {" "}
              Bio{" "}
            </NavLink>
            <hr></hr>
            <NavLink to="/projects" className="nav">
              {" "}
              Projects{" "}
            </NavLink>
            <hr></hr>
            <NavLink to="/blog" className="nav">
              {" "}
              Blog{" "}
            </NavLink>
            <hr></hr>
            <NavLink to="/contact" className="nav">
              {" "}
              Contact{" "}
            </NavLink>
          </nav>
        </div>
      </header>
      <Route exact path="/" component={Home} />
    </main>
  );
}

export default App;
