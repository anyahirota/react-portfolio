import React from 'react';
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>ANYA HIROTA</div>
        <div className="icons">
          <a href="https://www.linkedin.com/in/anya-hirota-59392560/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/anyahirota?tab=overview&from=2020-06-01&to=2020-06-18">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </header>
      <div className="body">
        <div className="content">
          <div className="howdy">
            <div className="howdy-message">
              <p>HOWDY.</p>
              <p>I'M ANYA.</p>
              <p>SOFTWARE DEV.</p>
              <p>FULLSTACK.</p>
              <p>FRONTEND FOCUSED.</p>
              <p>SF NATIVE.</p>
              <p>CURIOUS.</p>
              <p>ADVENTUROUS.</p>
              <p>CREATIVE.</p>
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="button-list">
          <div className="button">ABOUT ME</div>
          <div className="button">SKILLS</div>
          <div className="button">RESUME</div>
          <div className="button">PROJECTS</div>
        </div>
      </div>
    </div>
  );
};

export default Home;