import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <main className="My-Site">
      <Header />
      <Route exact path="/" component={Home} />
    </main>
  );
}

export default App;
