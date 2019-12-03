import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock.js';

class Article extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render() {
        let { article} = this.props;
        
        let detailStyle ={
            display:'inline-block'
        }
        
        return(
            <div>
                <ReactMarkdown source={article} renderers={{
                    code: CodeBlock
                }}/>
                <a style={detailStyle} href={window.location.href+"article" +"?uid=22"} target='_blank'>[详情]</a>
            </div>
        );
    }
}

export default Article;



