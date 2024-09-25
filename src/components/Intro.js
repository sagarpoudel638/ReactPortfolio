import React from "react";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-button">
        <h1>
          <span className="intro-im">I'M</span>
          <br />
          <span className="intro-name">SAGAR POUDEL</span>
          <br />
          <span className="intro-dev">SOFTWARE ENGINEER</span>
        </h1>
        <br />
        <h2>I love coding</h2>
        <br />
        <button className="download-btn">
          Download CV <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </section>
  );
}
