import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
      </Router>
    );
  }
}

export default App;
