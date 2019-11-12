import React, { Component } from 'react';
import './Home.css';
import ListItem from './ListItem.js';
import $ from 'jquery';
import { connect } from 'react-redux';
import { beforeFetch, failFetch, successFetch, modifyPageNum} from '../../redux/action.js';
import PropTypes from 'prop-types';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum : 0
        };
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    scrollHandler() {
        let conHeight = $('.content-container').height();
        let winHeight = $(window).height();
        let scrollTop = $(window).scrollTop();
        if (200 + scrollTop >= conHeight - winHeight){
            console.log('asdfghjkl');
            debugger
            this.props.fechContent(this.props.pageNum);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
        this.props.fechContent(0);
    }

    render() {
       
        return (
            <div>
                <div className="content-container-left" >
                    <div className="login-button-container"></div>
                </div>
                <div className="content-container" >
                    <div className="content-container-header"></div>
                    {(this.props.homeContent) ? this.props.homeContent.map(item => <ListItem key={item.uid} title={item.title} time={item.upload_time} tags={item.tags ? item.tags.split(".") : []} article_sub={item.article_sub} />):''}
                </div>
                <div className="content-container-right" >
                    <div className="content-container-right-ajax-test" id="content-container-right-ajax-test"></div>
                </div>
            </div>
        );
    }
}


// 定义方法mapStateToProps，参数为state，并且返回一个对象，对象内定义需要获取的store内的数据，
// 由于是使用的countReducer中的数据，所以需要使用state.countReducer.属性名 
function mapStateToProps(state) {
    return {
        pageNum: state.pageReducer.pageNum,
        homeContent : state.fetchReducer.homeContent
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        fechContent: (pageNum)=>{
            // console.log(props);
            // if(props.homeContent){
            //     return ;
            // }
            let url = `/public/Index/Index/subIndex?limit=8`;
            let firstPageNum = 8;
            console.log(props);
            if (pageNum === 0) {
                url = `/public/Index/Index/subIndex?start=0&limit=${firstPageNum}`
            } else {
                let start = (pageNum - 1) * 5 + firstPageNum;
                url = `/public/Index/Index/subIndex?start=${start}&limit=5`
            }
            //dispatch(beforeFetch());
            fetch(url, {
                method: 'GET'
            }).then(res => res.json()).then(
                (data) => {
                    pageNum = pageNum + 1;
                    dispatch(modifyPageNum(pageNum));
                    dispatch(successFetch(data.result));
                }
            )
        }
    }
}
Home.propTypes = {
    pageNum: PropTypes.number.isRequired,
    homeContent: PropTypes.array.isRequired,
    fechContent: PropTypes.func.isRequired
}
// connect的第一个参数为数据，即mapStateToProps方法
// 接着在第二个括号内传入当前需要被改造的组件 
export default connect(mapStateToProps, mapDispatchToProps)(Home);
