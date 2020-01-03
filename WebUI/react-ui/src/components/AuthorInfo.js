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
            <div className="author-div">
                

                <div className="roll-div">
                    <div className="roll-item1 roll-item">1</div>
                    <div className="roll-item2 roll-item">2</div>
                    <div className="roll-item3 roll-item">3</div>
                    <div className="roll-item4 roll-item">4</div>
                    <div className="roll-item5 roll-item">5</div>
                    <div className="roll-item6 roll-item">6</div>
                    <div className="roll-item7 roll-item">7</div>
                    <div className="roll-item8 roll-item">8</div>
                    <div className="roll-item9 roll-item">9</div>
                    <div className="roll-item10 roll-item">10</div>
                </div>
                
            </div>
        );
    }
}

export default AuthorInfo;