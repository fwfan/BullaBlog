import React, { Component } from 'react';
import Tag from './Tag.js'
import Article from './Article.js';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { title, time, tags, article_sub, detailA, uid } = this.props;
        console.log(uid);
        
        let detailStyle = detailA ? {
            display: 'inline-block',

        } : {
                display: 'none'
            }

        let hrStyle = detailA ? {
           
        } : {
                display: 'none'
            }
        return (
            <div className="list-item">
                <h3>{title}</h3>
                <Tag tags={tags} />
                <div className="list-item-time-container">{time}</div>
                <Article article={article_sub} />
                <a className="list-item-a" style={detailStyle} href={window.location.href + `article?uid=${uid}`} target='_blank'>[查看详情]</a>
               
            </div>
        );
    }
}

export default ListItem;