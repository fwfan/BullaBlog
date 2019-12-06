import React, {Component} from 'react';
import './Article.css';
import ListItem from './../Home/ListItem.js';
import './../Home/Home.css';

class ArticleCon extends Component{
    constructor(props){
        super(props);
        this.state = {
            article : []
        }
        
        this.fetchArticle = this.fetchArticle.bind(this);
        this.getQueryVariable = this.getQueryVariable.bind(this);
    }

    getQueryVariable(variable) {
        let pos, str, para, parastr;
        let array = []
        str = window.location.href;
        if (str.split("?")[1] != undefined && str.split("=")[1] != undefined) {
            parastr = str.split("?")[1];
            parastr = decodeURIComponent(parastr);

            var arr = []
            arr = parastr.split("&");

            for (var i = 0; i < arr.length; i++) {
                array[arr[i].split("=")[0]] = arr[i].split("=")[1];
            }

        }

        return array[variable];
    }

    fetchArticle(uid) {
        let url = `/Index/Index/getArticle?uid=${uid}`;
        fetch(url, {
            method: 'GET'
        }).then(res => res.json()).then(
            (data) => {
                if(data.result){
                    this.setState({
                        article: [...this.state.article, ...data.result]
                    });
                }
            }
        );
    }

    componentDidMount() {
        let articleUid = this.getQueryVariable('uid');
        this.fetchArticle(articleUid);
    }

    render(){
        return (
            <div className='article-con'>
               <div className='article-con-article'>
                    {this.state.article.map(item => <ListItem key={item.uid} title={item.title} time={item.upload_time} tags={item.tags ? item.tags.split(".") : []} uid={item.uid} article_sub={item.article} />)}
               </div>
               {/* <div className='article-con-relate'>sfdf</div> */}
            </div>
        );
    }
}

export default ArticleCon;