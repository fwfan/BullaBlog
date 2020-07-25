import React, { Component } from 'react';
import Tag from './Tag.js'
import Article from './Article.js';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demoUrl: ''
        }
    }

    putViewNum = (e) => {

        let obj = { uid: this.props.uid }

        fetch('/Index/Index/putViewNum', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(
            (data) => {
                
            }
        );
    }

    render() {
        const { title, time, tags, article_sub, detailA, uid, demoUrl, useDemoUrl, content_type , view_num} = this.props;

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

        let demoStyle = useDemoUrl > 0 && demoUrl ? {
            width: '100%',
            height: '300px',
            margin: '10px 0px 10px 0px',
            border: 'none'
        } : {
                display: 'none'
            }

        let demoUrlBak = demoUrl ? demoUrl : '';

        let observeDemoA = demoUrl ? {
            display: 'inline-block',
            margin: '0px 0px 0px 20px'
        } : {
                display: 'none'
            }

        return (
            <div className={ListItemClassName} style={ListItemStyle}>
                <h2 className="list-item-title">{title}</h2>
                <Tag tags={tags} />

                <div className="list-item-time-container">
                    <div className="list-item-time-title">更新时间:</div>
                    <div className="list-item-time">{time}</div>
                </div>

                <div className="list-item-view-num-container">
                    <div className="list-item-view-num-title">阅览人次:</div>
                    <div className="list-item-view-num">{view_num}</div>
                </div>

                <hr />
                <iframe src={demoUrlBak} style={demoStyle}></iframe>

                <Article article={article_sub} />
                <a className="list-item-a" style={detailStyle} href={window.location.href + `article?uid=${uid}`} target='_blank' onClick={this.putViewNum}>阅读全文</a>
                <a className="list-item-a" style={observeDemoA} href={window.origin + demoUrlBak} target='_blank' onClick={this.putViewNum}>查看Demo</a>

            </div>
        );
    }
}

export default ListItem;