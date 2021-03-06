import React, { Component } from 'react';

class Tag extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const { tags } = this.props;

        return (
            <div className="list-item-tag-container">
                <div className="list-item-tag-title">标签:</div>
                {tags.map(item => <span key={item} className="list-item-tag">{item}</span>)}
            </div>
        );
    }
}

export default Tag