import React from "react";
import Icons from "./Icons";

export default function IconsWrapper() {
  return (
    <section className="skills" id="skills">
      <Icons iconName="htmlIcon" alt="Html Icon" />
      <Icons iconName="cssIcon" alt="css Icon" />
      <Icons iconName="jsIcon" alt="js Icon" />
      <Icons iconName="githubIcon" alt="github Icon" />
      <Icons iconName="flutterIcon" alt="flutter Icon" />
    </section>
  );
}
