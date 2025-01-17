import React from "react";
import Title from "../components/Title";
import AboutComponent from "../components/AboutComponent";
import TeamMembers from "../components/Team";

function About() {
  return (
    <div className="pb-10">
      <Title text={'About Us'} link={'/about'}/>
      <AboutComponent/>
      <TeamMembers />
    </div>
  );
}

export default About;
