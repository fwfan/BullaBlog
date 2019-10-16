import React, { Component } from 'react';
import './Home.css';
import ListItem from './ListItem.js'
class Home extends Component {
    render() {
        return (
            <div>
                <div className="content-container-left" >
                    <div className="login-button-container">
                        
                    </div>
                </div>
                <div className="content-container" >
                    <div></div>
                    <div id="update-container" className="tab-content content-container-show">1ghjghjh</div>
                    <ListItem />
                    <ListItem />
                </div>
                <div className="content-container-right" >
                    <div className="content-container-right-ajax-test" id="content-container-right-ajax-test">ajaxtest</div>
                </div>
            </div>
        );
    }
}

export default Home;