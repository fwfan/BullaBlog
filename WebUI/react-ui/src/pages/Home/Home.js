import React, { Component } from 'react';
import './Home.scss';
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
            pageNum : 0,
            filter : '',
            stopFetch : false
        };
        this.lastScrollTime = 0;
        this.scrollHandler = this.scrollHandler.bind(this);
        this.beforeFetchContent = this.beforeFetchContent.bind(this);
    }

    scrollHandler() {
        let conHeight = $('.content-container').height();
        let winHeight = $(window).height();
        let scrollTop = $(window).scrollTop();
        let curTime = new Date();
        if (150 + scrollTop >= conHeight - winHeight){
            if(curTime - this.lastScrollTime < 500 || this.state.stopFetch === true) return; 
            this.lastScrollTime = curTime;
            this.beforeFetchContent(this.state.filter, false);
        }
    }

    beforeFetchContent(filter='', firstTime=true) {

        this.setState({ ...this.state, ...{ filter: filter } });
        let url = `/Index/Index/subIndex?limit=5`;
        let firstPageNum = 8;
        ProcessManagerE.startProcess();

        if (this.state.pageNum === 0 || firstTime) {
            url = `/Index/Index/subIndex?start=0&limit=${firstPageNum}`
        } else {
            let start = (this.state.pageNum - 1) * 5 + firstPageNum;
            url = `/Index/Index/subIndex?start=${start}&limit=5`
        }

        if (filter) {
            for(let name in filter){
                url = url + '&' + name + '=' + filter[name];
            }
            if(firstTime){
                this.clearContent(true,url);
            }else{
                this.clearContent(false, url);
            }
        }else{
            this.clearContent(false, url);
        }

    }

    fetchContent(url){
        fetch(url, {
            method: 'GET'
        }).then(res => res.json()).then(
            (data) => {
                ProcessManagerE.endProcess();
                let num = this.state.pageNum + 1;
                this.setState({
                    ...this.state, ...{
                        stopFetch: data.result.length < 5 ? true : false,
                        loadState: data.result.length < 5 ? 3: 2,
                        pageNum: num,
                        homeContent: [...this.state.homeContent, ...data.result]
                    }
                });
            }
        );
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler);
    }


    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);

        this.beforeFetchContent();
    }

    clearContent=(flag, url)=>{
        if (flag){
            this.setState({ ...this.state, ...{ homeContent: [], loadState: 1 } }, () => console.log(this.state));
        }else{
            this.setState({ ...this.state, ...{loadState: 1 } }, () => console.log(this.state));
        }
        
        this.fetchContent(url);
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
                    <Announcement homeFetch={this.beforeFetchContent} />
                    <UserMood />
                </div>
            </div>
        );
    }
}

export default Home;
