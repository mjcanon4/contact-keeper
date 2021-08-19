import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/layouts/Navbar";

const App = () => {
  return (
    <Router>
      <Fragment className="App">
        <Navbar />
        My app
      </Fragment>
    </Router>
  );
};

export default App;
