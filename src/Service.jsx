import React from "react";
import Card from "./Card";
import web from "../src/images/s3.webp";
import web1 from "../src/images/s1.png";
import web2 from "../src/images/s5.png";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card imgsrc={web} title="App development" />
              <Card imgsrc={web1} title="Web development" />
              <Card imgsrc={web2} title="Machine Learning" />
              <Card imgsrc={web} title="Blockchain development" />
              <Card imgsrc={web1} title="Backend development" />
              <Card imgsrc={web2} title="Demo development" />
              <Card imgsrc={web} title="Frontend development" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
