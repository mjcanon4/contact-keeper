import React, {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/layouts/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        My app
      </div>
    </Router>
  );
};

export default App;
