import React from "react";
import { NavLink } from "react-router-dom";
import web2 from "../src/images/web2.svg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web2}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
