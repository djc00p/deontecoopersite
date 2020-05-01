import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <section>
        <h1>
          Welcome!
          <br />
          <br />
          Click a link above to learn more about me!
        </h1>

        <div className="image-container">
          <img
            src="https://imgur.com/G6pbL3R.jpg?1"
            alt="Head Shot"
            className="headshot"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
