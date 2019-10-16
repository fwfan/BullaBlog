import React, { Component } from 'react';
import Tag from './Tag.js'
import Article from './Article.js';

class ListItem extends Component {
    constructor(props){
        super (props);
        this.state = {

        }
    }

    render() {
        const { title, time, tag, article} = this.props;
        return (
            <div>
                <h5>{title}</h5>
                <div>{time}</div>
                <Tag />
                <Article />
            </div>
        );
    }

}

export default ListItem;