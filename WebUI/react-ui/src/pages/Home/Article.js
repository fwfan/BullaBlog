import React, { Component } from 'react';
import showdown from 'showdown';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

class Article extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render() {
        const { article} = this.props;
        let converter = new showdown.Converter();
        let html = converter.makeHtml(article);

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



