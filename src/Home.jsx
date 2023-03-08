import React from "react";
import { NavLink } from "react-router-dom";
import web2 from "../src/images/web2.svg";
import Common from './Common';

const Home = () => {
  return (
    <>
     <Common
       name="Grow your business with"
        imgsrc={web2}
        visit="/service"
        btnname="Get Started"
     />
    </>
  );
};

export default Home;
