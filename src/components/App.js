import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 data-ns-test="project-name">IMDB of GAMES</h1>
        <p data-ns-test="project-description">
         All in one location for all games info
        </p>
      </>
    );
  }
}

export default App;
