import React, { Component } from 'react';
import './Home.css';
import ListItem from './ListItem.js';
import $ from 'jquery';

import Announcement from './Announcement.js';
import LoadingTips from '../../components/LoadingTips/LoadingTips.js';
import UserMood from './UserMood.js';
import { ProcessManagerE} from '../../components/ProgressBar/ProcessBar';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeContent : [],
            loadState : 0,
            pageNum : 0
        };
        this.lastScrollTime = 0;
        this.scrollHandler = this.scrollHandler.bind(this);
        this.fetchContent = this.fetchContent.bind(this);
    }

    scrollHandler() {
        let conHeight = $('.content-container').height();
        let winHeight = $(window).height();
        let scrollTop = $(window).scrollTop();
        let curTime = new Date();
        if (150 + scrollTop >= conHeight - winHeight){
            if(curTime - this.lastScrollTime < 500) return; 
            this.lastScrollTime = curTime;
            this.fetchContent();
        }
    }

    fetchContent() {
        let url = `/Index/Index/subIndex?limit=8`;
        let firstPageNum = 8;
        ProcessManagerE.startProcess();
        if (this.state.pageNum === 0) {
            url = `/Index/Index/subIndex?start=0&limit=${firstPageNum}`
        } else {
            let start = (this.state.pageNum - 1) * 5 + firstPageNum;
            url = `/Index/Index/subIndex?start=${start}&limit=5`
        }
        this.setState({loadState : 1});
        fetch(url, {
            method: 'GET'
        }).then(res => res.json()).then(
            (data) => {
                ProcessManagerE.endProcess();
                if(data.result.length === 0){
                    this.setState({
                        loadState: 3
                    });
                }else{
                    let num = this.state.pageNum + 1;

                    this.setState({
                        loadState: 2,
                        pageNum: num,
                        homeContent: [...this.state.homeContent, ...data.result]
                    });
                }

            }
        );
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler);
    }


    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);

        this.fetchContent(0);
    }

    render() {
        return (
            <div >
                <div className="content-container-left" >

                </div>
                <div className="content-container" >
                    <div className="content-container-header"></div>
                    {this.state.homeContent.map(item => <ListItem key={item.uid} title={item.title} time={item.upload_time} tags={item.tags ? item.tags.split(".") : []} 
                        uid={item.uid} article_sub={item.article_sub} detailA={true} demoUrl={item.demoUrl} useDemoUrl={item.useDemoUrl} content_type={item.content_type}/>)}
                    <LoadingTips loadState={this.state.loadState}></LoadingTips>
                </div>
                <div className="content-container-right" >
                    <Announcement />
                    <UserMood />
                </div>
            </div>
        );
    }
}

export default Home;
