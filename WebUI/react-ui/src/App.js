import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Life from "./pages/Life/Life.js";
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navHide: false
    }
  }

  componentDidMount() {

    if(window.location.hash.indexOf('article')>0){
      this.setState({
        navHide: true
      });
    }
    window.alert('new window' + window.location.href);

    window.addEventListener('hashchange', () => {
      if (window.location.hash.indexOf('article') > 0) {
        this.setState({
          navHide: true
        });
      } else {
        this.setState({
          navHide: false
        });
      }
      console.log('hash change' + window.location);
    });
  }

  render() {
    let navStyle = {
      position: 'fixed',
      backgroundColor: '#c54b04',
      height: '80px',
      width: '100%',
      top: 0,
      zIndex: 2,
      textAlign: 'center'
    }

    let navHideStyle = {
      height: '0px'
    }

    let contentContainerTopStyle = {
      height: '80px',
      width: '100%'
    }
    let contentContainerTopHideStyle = {
      height: '20px',
      width: '100%'
    }

    return (
      <div>
        <Router>
          <div style={this.state.navHide ? navHideStyle : navStyle} className="nav-container">
            <div className="nav">
              <ul>
                <li href="/" className="tab-head-home tab-head" >
                  <Link to="/">首页</Link>
                </li>
                {/* <li href="/" className="tab-head-home tab-head" >
                  <Link to="/study">学习</Link>
                </li>
                <li href="/" className="tab-head-about tab-head" >
                  <Link to="/life">杂碎</Link>
                </li> */}
                <li href="/" className="tab-head-about tab-head" >
                  <Link to="/about">关于</Link>
                </li>
                <li href="/" className="tab-head-about tab-head" >
                  <Link className="item-hide" to="/article">Article</Link>
                </li>
              </ul>
            </div>
          </div>

          <div style={this.state.navHide ? contentContainerTopHideStyle : contentContainerTopStyle} className="content-container-top" ></div>
          <CacheSwitch>
            <CacheRoute exact saveScrollPosition={true} path="/">
              <Home />
            </CacheRoute >
            {/* <Route path="/study">
              <About />
            </Route>
            <Route path="/life">
              <Life />
            </Route> */}
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Article">
              <About />
            </Route>
          </CacheSwitch>
        </Router>
      </div>
    );
  }
}

export default App;

