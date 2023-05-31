import React from "react";
import "../App.css";

const AboutMe = () => {
  return (
    <div>
      <div className="about-me-pic">
        <div className="pic-of-face-container">
          <img
            className="pic-of-face"
            alt="Anya's headshot"
            src="images/anya_hirota.jpg"
          ></img>
        </div>
      </div>
      <div className="about-me-text">
        <p>Hi there. I'm Anya Hirota.</p>
        <br />
        <p>
          I am a full stack software engineer with a love for frontend design
          and a passion for building user-focused applications. I have
          experience working as an engineer in the financial services and
          e-commerce industries, building internal tools and client-facing
          dashboards. I am an avid communicator and enjoy learning new skills in
          and out of the office.
        </p>
        <br />
        <p>My journey as a software engineer has been unconventional.</p>
        <br />
        <p>
          Born and raised in San Francisco, I spent my youth in various art
          classes and theater productions, attending Ruth Asawa School of the
          Arts. I started university at UC Santa Barbara, but spent a year
          abroad in Japan and Germany. Craving a new adventure, I decided to
          relocate to the UK, gaining my degree in business management with a
          focus of global industries from Pearson College London.
        </p>
        <br />
        <p>
          I graduated in March of 2020. While this time was challenging for many
          reasons, the silver lining was that it allowed me to take a step back
          and determine what I really wanted as a new graduate - and for me,
          that was working in an innovative technical space. I moved back to San
          Francisco and knew I needed a few more technical skills to thrive. So
          I started giving coding a try. And I am so glad I did! Initially
          thinking it would help inform my more business-focused role, I found
          myself really loving the development process and the tangible results
          of building applications. I don’t know if there was a single moment I
          knew I wanted to be a software engineer, but through the joy of
          learning and the satisfaction of seeing my code come to life, I found
          my path.
        </p>
        <br />
        <p>
          Tech is great but here are some of my other hobbies: -Cooking
          -Crafting -Singing -Traveling -Model UN -Animation
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
