import React, { Component } from 'react';
import './Home.css';
import ListItem from './ListItem.js'
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            content : []
        }
    }

    getData(){
        fetch(`/public/Index/Index/subIndex`, {
            method: 'GET'
        }).then(res => res.text()).then(
            data => {
                this.setState({ content: data })
            }
        )

    }
    componentDidMount() {
        this.getData();
    }

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