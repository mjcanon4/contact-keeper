import React, { BrowserRouter as Router, Route, Switch } from "react";
import "./App.css";
import Navbar from "../src/components/layouts/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      My app
    </div>
  );
};

export default App;
