import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../src/components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Fragment className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
