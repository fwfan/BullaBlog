import React, {Component} from 'react';
import './Article.css';
import ListItem from './../Home/ListItem.js';
import './../Home/Home.css';


class ArticleCon extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        //window.alert(window.location.href);
    }

    render(){

        return (
            <div className='article-con'>
               <div className='article-con-article'>
                    <ListItem title={"sdsds"} time={'2019-58-89'} tags={["呵呵"]} article_sub={"水电费润肤乳"}/>
               </div>
               <div className='article-con-relate'>sfdf</div>
            </div>
        );
    }
}

export default ArticleCon;