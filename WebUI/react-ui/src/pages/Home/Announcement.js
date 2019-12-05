import React, {Component}from 'react';
import './Home.css';

class Announcement extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){


        let contentStyle = {
            width :'100%',
            height : '400px',
            backgroundColor : 'white',
            padding :'10px 10px 10px 10px',
        }

        return (
            <div style={contentStyle}>
               <div className="announcement-visitor_number">今日访问人数：{2}</div>
            </div>
        );
    }
}

export default Announcement;