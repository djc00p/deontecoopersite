import React from "react";
import { Route } from "react-router-dom";

// Apollo
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// components
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Bio from "./components/Bio/Bio";
import Projects from "./components/Projects/Projects";
import SoundCloud from "./components/SoundCloud/SoundCloud";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

// CSS
import "./App.css";

// apollo client setup
const client = new ApolloClient({
  uri: "https://api.github.com/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main className="My-Site">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/Bio" component={Bio} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/SoundCloud" component={SoundCloud} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Contact" component={Contact} />
      </main>
    </ApolloProvider>
  );
}

export default App;
