import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Bio from "./components/Bio/Bio";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
  return (
    <main className="My-Site">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/Bio" component={Bio} />
      <Route exact path="/Projects" component={Projects} />
    </main>
  );
}

export default App;
