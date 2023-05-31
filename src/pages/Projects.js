import React, { useState } from "react";
import "../App.css";
import Project from "./Project";

const Projects = () => {
  const [displayCalCamperGif, setDisplayCalCamperGif] = useState(false);
  const [displayFridgeFriendGif, setDisplayFridgeFriendGif] = useState(false);
  const [displayYikesYokaiGif, setDisplayYikesYokaiGif] = useState(false);
  return (
    <div>
      <h1 className="page-title-margin">
        <span className="page-title">Projects</span> (from 2020)
      </h1>
      <div className="projects">
        <Project
          title="CalCamper"
          blurb="Campsite booking web application"
          picAlt="CalCamper website snapshot"
          picURL="images/project_pic_fsp.png"
          stack="PostgreSQL, Ruby on Rails, React/Redux, HTML, CSS, Amazon Web
          Services (S3 Storage), Google Map API, React-dates, Babel, Webpack"
          githubLink="https://github.com/anyahirota/calcamper"
          displayGif={displayCalCamperGif}
          setDisplayGif={setDisplayCalCamperGif}
          gifAlt="CalCamper gif"
          gifURL="https://calcamper-seed.s3-us-west-1.amazonaws.com/gif1.gif"
        />
        <Project
          title="Fridge Friend"
          blurb="Mobile-first fridge organisation web application"
          picAlt="Fridge Friend website snapshot"
          picURL="images/fridgefriend.png"
          stack="React, Redux, Mongoose, Mongo DB, Express, Node, HTML, CSS,
          Javascript, Amazon Web Services (S3 Storage), React-dates"
          githubLink="https://github.com/henryhannn/fridge-friend"
          displayGif={displayFridgeFriendGif}
          setDisplayGif={setDisplayFridgeFriendGif}
          gifAlt="Fridge Friend gif"
          gifURL="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/add_item_gif.gif"
        />
        <Project
          title="Yikes, Yokai!"
          blurb="Cute ghost shooter game inspired by Japanese design"
          picAlt="Yike Yokai Game snapshot"
          picURL="images/project_pic_yy.png"
          stack="Vanilla JavaScript, HTML (Canvas), CSS"
          githubLink="https://github.com/anyahirota/yikes_yokai"
          displayGif={displayYikesYokaiGif}
          setDisplayGif={setDisplayYikesYokaiGif}
          gifAlt="Yikes Yokai gif"
          gifURL="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/shootinggif.gif"
        />
      </div>
      {/* <img
        class="project-gif-img"
        src="https://calcamper-seed.s3-us-west-1.amazonaws.com/gif1.gif"
      ></img>
      <img
        id="mobile-gif"
        class="project-gif-img"
        src="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/add_item_gif.gif"
      ></img>
      <img
        class="project-gif-img"
        src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/shootinggif.gif"
      ></img> */}
    </div>
  );
};

export default Projects;
