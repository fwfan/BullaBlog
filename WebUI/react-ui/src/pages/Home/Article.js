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
        
        return(
            <div>
                <ReactMarkdown source={article} escapeHtml={false} renderers={{
                    code: CodeBlock
                }}/>
            </div>
        );
    }
}

export default Article;



