import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const displayFlame = (level) => {
    switch (level) {
      case 1:
        return (
          <td>
            <span className="flame-icon">
              <FontAwesomeIcon icon={faFire} />
            </span>
          </td>
        );
      case 2:
        return (
          <td>
            <span className="flame-icon">
              <FontAwesomeIcon icon={faFire} />
            </span>
            <span className="flame-icon">
              <FontAwesomeIcon icon={faFire} />
            </span>
          </td>
        );
      case 3:
        return (
          <td>
            <span className="flame-icon">
              <FontAwesomeIcon icon={faFire} />
            </span>
            <span className="flame-icon">
              <FontAwesomeIcon icon={faFire} />
            </span>
            <span className="flame-icon">
              <FontAwesomeIcon icon={faFire} />
            </span>
          </td>
        );
      default:
        return;
    }
  };

  return (
    <div>
      <h1 className="page-title-margin">
        <span className="page-title">Skills</span> (So Far.)
      </h1>

      <div className="skills-key">
        <div>
          Used Very Often / Current Main Technologies ={" "}
          <span className="flame-icon">
            <FontAwesomeIcon icon={faFire} />
          </span>
          <span className="flame-icon">
            <FontAwesomeIcon icon={faFire} />
          </span>
          <span className="flame-icon">
            <FontAwesomeIcon icon={faFire} />
          </span>
        </div>
        <div>
          Used Often ={" "}
          <span className="flame-icon">
            <FontAwesomeIcon icon={faFire} />
          </span>
          <span className="flame-icon">
            <FontAwesomeIcon icon={faFire} />
          </span>
        </div>
        <div>
          Used Sometimes ={" "}
          <span className="flame-icon">
            <FontAwesomeIcon icon={faFire} />
          </span>
        </div>
      </div>

      <table>
        <tr>
          <th>Skill</th>
          <th>Experience</th>
        </tr>
        <tr>
          <td>JavaScript</td>
          {displayFlame(3)}
        </tr>
        <tr>
          <td>React</td> {displayFlame(3)}
        </tr>
        <tr>
          <td>Node</td> {displayFlame(3)}
        </tr>
        <tr>
          <td>HTML</td> {displayFlame(3)}
        </tr>
        <tr>
          <td>CSS</td> {displayFlame(3)}
        </tr>
        <tr>
          <td>Jest</td> {displayFlame(3)}
        </tr>
        <tr>
          <td>Ruby</td> {displayFlame(3)}
        </tr>
        <tr>
          <td>Rails</td> {displayFlame(3)}
        </tr>
        <tr>
          <td>Ramda</td> {displayFlame(3)}
        </tr>
        <tr>
          <td>Git</td> {displayFlame(3)}
        </tr>
        <tr>
          <td>DevExtreme</td> {displayFlame(3)}
        </tr>
        <tr>
          <td>Recharts</td> {displayFlame(3)}
        </tr>
        <tr>
          <td>Redis</td> {displayFlame(2)}
        </tr>
        <tr>
          <td>C#</td> {displayFlame(2)}
        </tr>
        <tr>
          <td>.Net</td> {displayFlame(2)}
        </tr>
        <tr>
          <td>Azure</td> {displayFlame(2)}
        </tr>
        <tr>
          <td>TypeScript</td> {displayFlame(2)}
        </tr>
        <tr>
          <td>Docker</td> {displayFlame(2)}
        </tr>
        <tr>
          <td>SQL</td> {displayFlame(2)}
        </tr>
        <tr>
          <td>GraphQL</td> {displayFlame(2)}
        </tr>
        <tr>
          <td>Postman</td> {displayFlame(2)}
        </tr>
        <tr>
          <td>Microsoft SQL Server</td> {displayFlame(2)}
        </tr>
        <tr>
          <td>PostgreSQL</td> {displayFlame(1)}
        </tr>
        <tr>
          <td>MSAL</td> {displayFlame(1)}
        </tr>
        <tr>
          <td>Firebase</td> {displayFlame(1)}
        </tr>
        <tr>
          <td>Swift</td> {displayFlame(1)}
        </tr>
        <tr>
          <td>Xcode</td> {displayFlame(1)}
        </tr>
        <tr>
          <td>SharePoint</td> {displayFlame(1)}
        </tr>
        <tr>
          <td>Power Automate</td> {displayFlame(1)}
        </tr>
      </table>
    </div>
  );
};

export default Skills;
