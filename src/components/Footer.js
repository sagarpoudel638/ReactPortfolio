import React from "react";
import Title from "./Title";

export default function Footer() {
  return (
    <footer>
      <div class="links">
        <Title title="LINKS"/>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#project">PROJECT</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div class="social-links">
      <Title title="SOCIAL LINKS"/>
        <ul>
          <li>
            <a href="https://www.facebook.com/sagarpoudel638" target="_blank">
              FACEBOOK
            </a>
          </li>
          <li>
            <a href="https://github.com/sagarpoudel638" target="_blank">
              GITHUB
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sagarpoudel638/"
              target="_blank"
            >
              LINKEDIN
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
