import React, { Component } from 'react';
import Tag from './Tag.js'
import Article from './Article.js';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demoUrl :''
        }
    }

    render() {
        const { title, time, tags, article_sub, detailA, uid, demoUrl, useDemoUrl, content_type} = this.props;
        
        let detailStyle = detailA && content_type ? {
            display: 'inline-block',

        } : {
                display: 'none'
            };

        let ListItemStyle = detailA ? {
           
        } : {
                minHeight: '800px'
        }

        let ListItemClassName = detailA ? "list-item" : "list-item-no-detail"

        let demoStyle = useDemoUrl && demoUrl? {
            width: '100%',
            height: '300px',
            margin: '10px 0px 10px 0px',
            border : 'none'
        }:{
            display :'none' 
        }

        let demoUrlBak = useDemoUrl && demoUrl ? demoUrl :'';
        
        let observeDemoA = useDemoUrl && useDemoUrl ? {
            display :'inline-block',
            margin :'0px 0px 0px 20px'
         } : {
            display :'none'
         }

        return (
            <div className={ListItemClassName} style={ListItemStyle}>
                <h2 className="list-item-title">{title}</h2>
                <Tag tags={tags} />
                
                <div className="list-item-time-container">
                    <div className="list-item-time-title">更新时间:</div>
                    <div className="list-item-time">{time}</div>
                </div>
                <hr />
                <iframe src={demoUrlBak} style={demoStyle}></iframe>
                
                <Article article={article_sub} />
                <a className="list-item-a" style={detailStyle} href={window.location.href + `article?uid=${uid}`} target='_blank'>阅读全文</a>
                <a className="list-item-a" style={observeDemoA} href={window.origin + demoUrlBak} target='_blank'>查看Demo</a>
                
            </div>
        );
    }
}

export default ListItem;