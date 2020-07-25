import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
//import Life from "./pages/Life/Life.js";
import ArticleCon from "./pages/Article/ArticleCon.js";
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { Toast } from "./components/Toast/Toast.js";
import {ProcessBar} from "./components/ProgressBar/ProcessBar";
import ReactDom from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navHide: false,
      activeLi: 'home'
    }
  }

  componentDidMount() {

    this.changeRouteState()();
    
    window.addEventListener('hashchange', this.changeRouteState());
  }

  changeRouteState=()=>{

    return ()=>{
      if (window.location.hash.indexOf('article') > 0) {
        
        this.setState({
          navHide: true,
          activeLi: 'article'
        });
      } else if (window.location.hash.indexOf('study') > 0) {
        this.setState({
          navHide: false,
          activeLi: 'study'
        });
      } else if (window.location.hash.indexOf('life') > 0) {
        this.setState({
          navHide: false,
          activeLi: 'life'
        });
      } else if (window.location.hash.indexOf('about') > 0) {
        var body = document.getElementsByTagName('body');
        ReactDom.findDOMNode(body[0]).style.overflowX='hidden';
        ReactDom.findDOMNode(body[0]).style.overflowY = 'hidden';
        this.setState({
          navHide: false,
          activeLi: 'about'
        });
      } else {
        var body = document.getElementsByTagName('body');
        ReactDom.findDOMNode(body[0]).style.overflowX = '';
        ReactDom.findDOMNode(body[0]).style.overflowY = '';
        this.setState({
          navHide: false,
          activeLi: 'home'
        });
      }
    }
  }

  render() {
    let navStyle = {
      position: 'fixed',
      backgroundColor: 'rgb(14, 55, 63)',
      height: '60px',
      width: '100%',
      top: 0,
      zIndex: 2,
      textAlign: 'center',
      boxShadow: '0px 1px 1px rgb(14, 55, 63)'
    }

    let activeStyle = {
      border : 'blue 0px solid',
      borderBottomColor:'white',
      //borderBottomWidth :'4px',
      fontSize : '21px'
    }

    let unActiveStyle = {
      borderBottomColor: 'none',
      borderBottomWidth: '0',
    }

    let navHideStyle = {
      height: '0px',
      display : 'none'
    }

    let contentContainerTopStyle = {
      height: '60px',
      width: '100%'
    }
    let contentContainerTopHideStyle = {
      height: '0px',
      width: '100%'
    }

    return (
      <div>
        
        <Router>
          <Toast />
          <div style={this.state.navHide ? navHideStyle : navStyle} className="nav-container">
            <div className="nav">
              <ul>
                <li href="/" className="tab-head-home tab-head" style={this.state.activeLi === 'home' ? activeStyle : unActiveStyle}>
                  <Link to="/">博客</Link>
                </li>
                {/* <li href="/" className="tab-head-home tab-head" style={this.state.activeLi === 'study' ? activeStyle : unActiveStyle}>
                  <Link to="/study">学习</Link>
                </li>
                <li href="/" className="tab-head-about tab-head" style={this.state.activeLi === 'life' ? activeStyle : unActiveStyle}>
                  <Link to="/life">杂碎</Link>
                </li> */}
                <li href="/" className="tab-head-about tab-head" style={this.state.activeLi === 'about' ? activeStyle : unActiveStyle}>
                  <Link to="/about">关于</Link>
                </li>
                <li href="/" className="tab-head-about tab-head" style={this.state.activeLi === 'article' ? activeStyle : unActiveStyle}>
                  <Link className="item-hide" to="/article">Article</Link>
                </li>
              </ul>
            </div>
            <div className="nav-container-login-div"><a className="nav-container-login-a"></a></div>
          </div>

          <div style={this.state.navHide ? contentContainerTopHideStyle : contentContainerTopStyle} className="content-container-top" ></div>

          <ProcessBar />          
          
          <CacheSwitch>
            <CacheRoute exact saveScrollPosition={true} style={contentContainerTopHideStyle} path="/">
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
            <Route path="/article">
              <ArticleCon />
            </Route>
          </CacheSwitch>
        </Router>
        
      </div>
    );
  }
}

export default App;

