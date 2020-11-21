import React, { Component, useState } from "react";
import "../styles/App.css";
import Project from "./Project";

const App = () => {
  const projects = [
    {
      heading: "Linkedin",
      description:
        "LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, it is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs."
    },
    {
      heading: "Amazon",
      description:
        "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence."
    }
  ];
  return (
    <>
      {projects.map((item) => (
        <Project heading={item.heading} description={item.description} />
      ))}
    </>
  );
};

export default App;
