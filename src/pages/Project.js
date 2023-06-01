import React from "react";
import "../App.css";

const Project = ({
  title,
  blurb,
  picAlt,
  picURL,
  stack,
  githubLink,
  displayGif,
  setDisplayGif,
  gifAlt,
  gifURL,
}) => {
  return (
    <div className="project flex-column margin-bottom-30">
      <h2 className="project-title">- {title} -</h2>
      <p className="project-blurb">{blurb}</p>
      <div
        className="action-button"
        role="button"
        aria-pressed="false"
        onClick={() => {
          displayGif ? setDisplayGif(false) : setDisplayGif(true);
        }}
        onKeyDown={() => {}}
      >
        {displayGif ? "Stop Gif" : "See App in Action"}
      </div>
      <div className="project-image">
        {displayGif ? (
          <img class="project-gif-img" alt={gifAlt} src={gifURL}></img>
        ) : (
          <img className="pic-of-project" alt={picAlt} src={picURL}></img>
        )}
      </div>
      <div className="project-stack">
        <p>
          <span className="bold-font">Tech Used: </span>
          {stack}
        </p>
      </div>
      <div>
        <a className="pink-hover" href={githubLink}>
          Github Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
