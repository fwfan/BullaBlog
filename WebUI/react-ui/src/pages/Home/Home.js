import React, { Component } from 'react';
import './Home.css';
import ListItem from './ListItem.js';
import $ from 'jquery';
import { connect } from 'react-redux';
import { beforeFetch, failFetch, successFetch, modifyPageNum} from '../../redux/action.js';
import PropTypes from 'prop-types';
import Announcement from './Announcement.js';
import LoadingTips from '../../components/LoadingTips.js';


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
        )
    }

    componentWillUnmount(){
        console.log('will Unmount' + this.state.pageNum);
        window.removeEventListener('scroll', this.scrollHandler);
    }


    componentDidMount() {
        console.log('Did Unmount' + this.state.pageNum);
        window.addEventListener('scroll', this.scrollHandler);

        this.fetchContent(0);
    }

    render() {
       
        return (
            <div>
                <div className="content-container-left" >

                </div>
                <div className="content-container" >
                    <div className="content-container-header"></div>
                    {this.state.homeContent.map(item => <ListItem key={item.uid} title={item.title} time={item.upload_time} tags={item.tags ? item.tags.split(".") : []} uid={item.uid} article_sub={item.article_sub} detailA={true} />)}
                    <LoadingTips loadState={this.state.loadState}></LoadingTips>
                </div>
                <div className="content-container-right" >
                    <Announcement />
                    <div className="content-container-right-ajax-test" id="content-container-right-ajax-test"></div>
                </div>
            </div>
        );
    }
}




















// 定义方法mapStateToProps，参数为state，并且返回一个对象，对象内定义需要获取的store内的数据，
// 由于是使用的countReducer中的数据，所以需要使用state.countReducer.属性名 
// function mapStateToProps(state) {
//     return {
//         pageNum: state.pageReducer.pageNum,
//         homeContent : state.fetchReducer.homeContent
//     }
// }

// function mapDispatchToProps(dispatch, props) {
//     return {
//         modifyPageNum: (num) => dispatch(modifyPageNum(num)),
//         fechContent: (pageNum)=>{
//             // console.log(props);
//             // if(props.homeContent){
//             //     return ;
//             // }
//             let url = `/public/Index/Index/subIndex?limit=8`;
//             let firstPageNum = 8;
//             console.log(props);
//             if (pageNum === 0) {
//                 url = `/public/Index/Index/subIndex?start=0&limit=${firstPageNum}`
//             } else {
//                 let start = (pageNum - 1) * 5 + firstPageNum;
//                 url = `/public/Index/Index/subIndex?start=${start}&limit=5`
//             }
//             //dispatch(beforeFetch());
//             fetch(url, {
//                 method: 'GET'
//             }).then(res => res.json()).then(
//                 (data) => {
//                     pageNum = pageNum + 1;
//                     dispatch(successFetch(data.result));
//                 }
//             )
//         }
//     }
// }
// Home.propTypes = {
//     pageNum: PropTypes.number.isRequired,
//     homeContent: PropTypes.array.isRequired,
//     fechContent: PropTypes.func.isRequired,
//     modifyPageNum: PropTypes.func.isRequired
// }
// connect的第一个参数为数据，即mapStateToProps方法
// 接着在第二个括号内传入当前需要被改造的组件 
//export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
