import React, { Component } from 'react';
import './Home.css';
import ListItem from './ListItem.js';
import $ from 'jquery';
import { connect } from 'react-redux';
import { addCount } from '../../redux/countAction.js';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: []
        }
        this.pageNum = 0;
        this.scrollHandler = this.scrollHandler.bind(this);
        this.getData = this.getData.bind(this);
    }

    scrollHandler() {
        let conHeight = $('.content-container').height();
        let winHeight = $(window).height();
        let scrollTop = $(window).scrollTop();

        if (200 + scrollTop >= conHeight - winHeight){
            this.getData();
        }
    }

    getData() {
        let url = `/public/Index/Index/subIndex?limit=10`;
        let firstPageNum = 8;
        if(this.pageNum === 0){
            url = `/public/Index/Index/subIndex?start=0&limit=${firstPageNum}`
        }else{
            let start = (this.pageNum - 1) * 5 + firstPageNum;
            url = `/public/Index/Index/subIndex?start=${start}&limit=5`
        }

        fetch(url, {
            method: 'GET'
        }).then(res => res.json()).then(
            (data) => { 
                this.pageNum++; 
                this.setState({ content: [...this.state.content, ...data.result] })
            }
        )
    }

    componentDidMount() {
        if(this.state.content.length > 0) return;
        console.log(this.state.content.length);
        window.addEventListener('scroll', this.scrollHandler);
        this.getData();
    }

    render() {
        return (
            <div>
                <div className="content-container-left" >
                    <button onClick={()=>this.props.addCount()}>加1</button>
                    {this.props.count}
                    <div className="login-button-container"></div>
                </div>
                <div className="content-container" >
                    <div className="content-container-header"></div>
                    {this.state.content.map(item => <ListItem key={item.uid} title={item.title} time={item.upload_time} tags={item.tags ? item.tags.split(".") : []} article_sub={item.article_sub} />)}
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
        count: state.countReducer.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCount: () => dispatch(addCount())
    }
}
Home.propTypes = {
    count: PropTypes.number.isRequired,
    addCount: PropTypes.func.isRequired
}
// connect的第一个参数为数据，即mapStateToProps方法
// 接着在第二个括号内传入当前需要被改造的组件 
export default connect(mapStateToProps, mapDispatchToProps)(Home);
