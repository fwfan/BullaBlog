import React, { Component } from 'react';
import '../components.scss';
class ScrollDiv extends Component {
    constructor(props){
        super(props);
        this.state = {
            clientHeight: document.documentElement.clientHeight-80,
            clientWidth: document.documentElement.clientWidth
        }

        this.scrollTime = 0;
        this.scrollHandler = this.scrollHandler.bind(this);
        this.beforeFetchContent = this.beforeFetchContent.bind(this);
    }

    scrollHandler() {

    }

    beforeFetchContent() {

    }

    render(){
        let containerStyle = {
            width: this.state.clientWidth,
            height :this.state.clientHeight,
            border : 'black',
            overflow :'auto',
            overflowX: 'hidden',
            wordBreak: 'break-all',
            
        }

        return (
            <div className='scroll-div' style={containerStyle}>
                
            </div>
        );
    }

}

export default ScrollDiv;