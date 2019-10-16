import React, { Component } from 'react';

class Article extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render() {
        return(
            <div>
                <p>在原有的新建或编辑aaa服务器时，支持单个服务器的新建和修改。前台下发新建和编辑多个aaa服务器时的数据，php进行decode时的数据类型的结果是不一样的，导致了该该问题的出现。</p>
            </div>
        );
    }
}

export default Article;