import React from "react";
import Intro from "./Intro";
import Banner from "./Banner";
import IconsWrapper from "./IconsWrapper";
import MyWorkWrapper from "./MyWorkWrapper";
import AboutMeWrapper from "./AboutMeWrapper";
import Contact from "./Contact";
import Icons from "./Icons";
import portfolio from "../assets/Portfolio.png";
import Footer from "./Footer";

export default function MainBody() {
  return (
    <div className="mainbodywrapper">
      
      <Intro />
      <Banner />
      <IconsWrapper />
      <MyWorkWrapper />
      <AboutMeWrapper />
      <Contact />
      <a href="#home">
        <Icons iconName="upIcon" className="top" />
      </a>
      
    </div>
  );
}
