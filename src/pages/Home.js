import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Howdy from "./Howdy";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Resume from "./Resume";
import Projects from "./Projects";
//add contact //

const Home = () => {
  const [displayOption, setDisplayOption] = useState("howdy");
  const nextPage = {
    howdy: "aboutMe",
    aboutMe: "skills",
    skills: "resume",
    resume: "projects",
    projects: "howdy",
  };
  const prevPage = {
    howdy: "projects",
    aboutMe: "howdy",
    skills: "aboutMe",
    resume: "skills",
    projects: "resume",
  };

  const renderContainer = () => {
    switch (displayOption) {
      case "howdy":
        return <Howdy setDisplayOption={setDisplayOption} />;
      case "aboutMe":
        return <AboutMe setDisplayOption={setDisplayOption} />;
      case "skills":
        return <Skills setDisplayOption={setDisplayOption} />;
      case "resume":
        return <Resume setDisplayOption={setDisplayOption} />;
      case "projects":
        return <Projects setDisplayOption={setDisplayOption} />;
      default:
        return <Howdy setDisplayOption={setDisplayOption} />;
    }
  };

  const renderButton = (navTitle, label) => {
    return (
      <div
        className={`button ${navTitle === displayOption ? "selected" : ""}`}
        role="button"
        aria-pressed="false"
        onClick={() => {
          setDisplayOption(navTitle);
        }}
        onKeyDown={() => {}}
      >
        {label}
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="back-to-anya"
          role="button"
          aria-pressed="false"
          onClick={() => {
            setDisplayOption("howdy");
          }}
          onKeyDown={() => {}}
        >
          ANYA HIROTA
        </div>
        <div className="icons">
          <a
            className="icon"
            href="https://www.linkedin.com/in/anya-hirota-59392560/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="icon" href="https://github.com/anyahirota?tab=overview">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </header>
      <div className="body">
        <div
          className={
            displayOption === "howdy"
              ? "arrow-container one-arrow"
              : "arrow-container two-arrow"
          }
        >
          {displayOption !== "howdy" ? (
            <div
              className="next-button"
              role="button"
              aria-pressed="false"
              onClick={() => {
                setDisplayOption(prevPage[displayOption]);
              }}
              onKeyDown={() => {}}
            >
              <FontAwesomeIcon icon={faCircleArrowLeft} />
            </div>
          ) : null}
          <div
            className="next-button"
            role="button"
            aria-pressed="false"
            onClick={() => {
              setDisplayOption(nextPage[displayOption]);
            }}
            onKeyDown={() => {}}
          >
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </div>
        </div>
        <div className="content">{renderContainer()}</div>
      </div>
      <div className="footer">
        <div className="button-list">
          {renderButton("howdy", "HOME")}
          {renderButton("aboutMe", "ABOUT ME")}
          {renderButton("skills", "SKILLS")}
          {renderButton("resume", "RESUME")}
          {renderButton("projects", "PROJECTS")}
        </div>
        <div className="contact">
          anyahirota@gmail.com +1 415 889 0667
        </div>
      </div>
    </div>
  );
};

export default Home;
