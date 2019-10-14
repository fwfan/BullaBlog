import React from 'react';
import {HashRouter as Router, Route, Link, Switch} from "react-router-dom"
import Home from "./pages/Home/Home.js"
import About from "./pages/About/About.js"

function App() {
  
  return (
    <div>
      <Router>
          <div className="nav-container">
            <div className="nav">
              <ul>
                <li href="/" className="tab-head-home tab-head" >
                  <Link to="/">Home</Link>
                </li>
                <li href="/" className="tab-head-about tab-head" > 
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-container-top" ></div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
