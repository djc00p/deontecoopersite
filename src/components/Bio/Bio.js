import React from "react";
import "./Bio.css";

const Bio = () => {
  var turing = (
    <a
      target="_blank"
      href="https://turing.io/"
      rel="noopener noreferrer"
      alt="Turing School of Software and Design website"
    >
      Turing School of Software and Design
    </a>
  );
  var ruby = (
    <a
      target="_blank"
      href="https://rubyonrails.org/"
      rel="noopener noreferrer"
      alt="Ruby on Rails website"
    >
      Ruby on Rails
    </a>
  );
  var js = (
    <a
      target="_blank"
      href="https://www.javascript.com/"
      rel="noopener noreferrer"
      alt="JavaScript website"
    >
      JavaScript
    </a>
  );
  var react = (
    <a
      target="_blank"
      href="https://reactjs.org/"
      rel="noopener noreferrer"
      alt="React website"
    >
      React
    </a>
  );
  var python = (
    <a
      target="_blank"
      href="https://www.python.org/"
      rel="noopener noreferrer"
      alt="Python website"
    >
      Python
    </a>
  );
  var hydroponics = (
    <a
      target="_blank"
      href="https://en.wikipedia.org/wiki/Hydroponics"
      rel="noopener noreferrer"
      alt="Hydroponics Gardening Wiki"
    >
      Hydroponics Gardening
    </a>
  );

  return (
    <div className="My-Bio">
      <section className="bio">
        <div className="image-container">
          <img
            src="https://imgur.com/G6pbL3R.jpg?1"
            alt="Head Shot"
            className="headshot"
          />
        </div>
        <p className="bio-p">
          My name is Deonté J. Cooper. I was born in Denver, CO but have lived
          most of my days in Aurora, CO. I am a Software Engineer that studied
          at {turing} in the 1901 Backend Engineer program where {ruby} is
          primarily taught 6/7 months and the last month was spent learning {js}
          . In those seven months, I learned Object Oriented Programming in
          Ruby, building Web Applications in Ruby, building Professional Rails
          applications, and Client-Side Development with JavaScript. I enjoy
          both frontend and backend web development. I have worked with other
          programming languages such as {react}, which is what I used to build
          this site, and {python}. I have an interest for AI technologies
          because in my eyes that will be the way of future and could possibly
          make it better and easier world to live in.
        </p>
        <p className="bio-p">
          Some hobbies of mine are Video Games and Music Production. I have been
          playing video games since as far back as I can remember and that is
          what sparked my interest in programming. I mostly play RPGs
          (Role-Playing Games) like The Witcher 3, Mass Effect, Pokemon, Dark
          Souls and many more. I also enjoy FPS (First-Person Shooters) games
          like Call of Duty and Battlefield. I enjoy a well-told story and a
          good challenge. Dark Souls is the gaming version of how I describe
          programming. It is challenging but not impossible, with a little grit
          and understanding of how things work you can overcome any challenge.
          Music is my favorite creation by humankind. It is one of the few
          things that can bring people of different backgrounds together and
          have an impact on each individual. It can envelop emotions that can
          speak the truths of the heart without one even knowing and there is
          always a song for someone out there. Music is my life and passion and
          I want to share that passion with the world.
        </p>
        <div className="image-container">
          <img
            src="https://i.imgur.com/12qGtmyl.jpg?1.jpg"
            alt="Me holding a boa in New Orleans, LA"
            className="image"
          />
          <img
            src="https://i.imgur.com/KHvfTogl.jpg?1"
            alt="Me holding a boa in New Orleans, LA"
            className="image"
          />
        </div>
        <p className="bio-p">
          I have a love and passion for reptiles, so I'm looking into getting
          into reptile keeping and possibly one-day breeding as a side hobby. I
          am also currently learning about {hydroponics} so that I can grow
          fruits and vegetables in my home without the use of soil. In hopes of
          using what I've learned, I would like to help my family and friends
          start growing at home as well. I would like to start an mini side
          business with my excess produce and sell it at farmers marts. I would
          also like to share what I've learned with others to show that anyone
          can do it as well.
        </p>
      </section>
    </div>
  );
};

export default Bio;
