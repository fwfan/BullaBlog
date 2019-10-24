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
        const { title, time, tags, article_sub} = this.props;
        return (
            <div className="list-item">
                <h3>{title}</h3>
                <Tag tags={tags}/>
                <div className="list-item-time-container">{time}</div>
                <Article article={article_sub}/>
                <hr />
            </div>
        );
    }
}

export default ListItem;