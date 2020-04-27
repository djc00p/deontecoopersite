import React, { Component } from "react";
import repodata from "./Repodata.json";
import "./Projects.css";

// console.log(JSON.stringify(repodata.data.user.pinnedItems.edges));

class Projects extends Component {
  render() {
    const getRepos = repodata.data.user.pinnedItems.edges;

    function hpurl(hpu) {
      if (hpu !== "") {
        return (
          <a href={hpu} alt="A Link to the Homepage">
            {hpu}
          </a>
        );
      } else {
        return "Visit Github for use of external links";
      }
    }

    const repos = getRepos.map(repo => (
      <div key={repo.node.name} className="repo-info">
        <h2>{repo.node.name}</h2>
        <p>
          <br />
          {repo.node.description}
          <br />
          <br />
          <strong>Primary Programming Language</strong>:{" "}
          {repo.node.primaryLanguage.name}
        </p>
        <h3>Links</h3>
        Github Link:{" "}
        <a href={repo.node.url} alt="A Link to the Github page">
          {repo.node.url}
        </a>
        <br />
        Home Page: {hpurl(repo.node.homepageUrl)}
        <br />
      </div>
    ));

    return (
      <div>
        <h1>Projects</h1>
        {repos}
      </div>
    );
  }
}

export default Projects;
