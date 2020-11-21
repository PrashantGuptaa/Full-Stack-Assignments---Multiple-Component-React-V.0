import React from "react";

export default function Project({ heading, description }) {
  return (
    <>
      <div data-ns-test="project-name">{heading}</div>
      <div data-ns-test="project-description">{description}</div>
    </>
  );
}
