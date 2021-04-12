import { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const AboutPage = () => {
  return (
    <div className="General-app-text-content App-page-with-bar">
      <div className="Paragraph-block">
        <h2 style={{ color: "black" }}>
          <b>
            <u>About</u>
          </b>
        </h2>
        <p>
          {" "}
          The{" "}
          <a
            className="Info-link"
            href="https://en.wikipedia.org/wiki/Doomsday_rule"
            target="_blank"
            rel="noopener noreferrer"
          >
            Doomsday algorithm
          </a>{" "}
          is a method to mentally compute the day of the week for a given date.
          This web application is designed to both teach and provide practice to
          facilitate learning the skill. This web application is designed to
          both teach and provide practice to facilitate learning the skill.{" "}
        </p>
        <p>
          {" "}
          This web application is designed to both teach and provide practice to
          facilitate learning the skill.{" "}
        </p>
        <p> The 'Learn' page </p>
      </div>
    </div>
  );
};

export default AboutPage;
