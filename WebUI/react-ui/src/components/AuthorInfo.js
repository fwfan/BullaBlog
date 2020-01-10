import React, { Component } from 'react';
import './components.css';

class AuthorInfo extends Component {
    constructor (props){
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <div className="author-div announcement-div">
                客户的思路有时候真的很清奇。
                <br />
                <br />
                手机APP天天给用户发通知，真的很烦。
                <div className="roll-div">
                    <div className="roll-item1 roll-item"></div>
                    <div className="roll-item2 roll-item"></div>
                    <div className="roll-item3 roll-item"></div>
                    <div className="roll-item4 roll-item"></div>
                    <div className="roll-item5 roll-item"></div>
                    {/* <div className="roll-item6 roll-item">6</div>
                    <div className="roll-item7 roll-item">7</div>
                    <div className="roll-item8 roll-item">8</div>
                    <div className="roll-item9 roll-item">9</div>
                    <div className="roll-item10 roll-item">10</div> */}
                </div>
                
            </div>
        );
    }
}

export default AuthorInfo;