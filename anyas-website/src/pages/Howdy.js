import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Howdy = ({ setDisplayOption }) => {
  return (
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
        <div
          className="next-button"
          role="button"
          aria-pressed="false"
          onClick={() => {
            setDisplayOption("aboutMe");
          }}
          onKeyDown={() => {}}
        >
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Howdy;
