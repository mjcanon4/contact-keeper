import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/layouts/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Fragment className="App">
        <div></div>
      </Fragment>
    </Router>
  );
};

export default App;
