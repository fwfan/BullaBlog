import React, { Component } from 'react';
import {HashRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Life from "./pages/Life/Life.js";

class App extends Component {

  render(){
    return (
      <div>
        <Router>
          <div className="nav-container">
            <div className="nav">
              <ul>
                <li href="/" className="tab-head-home tab-head" >
                  <Link to="/">首页</Link>
                </li>
                <li href="/" className="tab-head-home tab-head" >
                  <Link to="/study">学习</Link>
                </li>
                <li href="/" className="tab-head-about tab-head" >
                  <Link to="/life">杂碎</Link>
                </li>
                <li href="/" className="tab-head-about tab-head" >
                  <Link to="/about">Demo</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="content-container-top" ></div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/study">
              <About />
            </Route>
            <Route path="/life">
              <Life />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  } 
}

export default App;

