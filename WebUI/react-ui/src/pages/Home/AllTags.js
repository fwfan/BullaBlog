import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Home.scss'

class AllTags extends Component {
    constructor(props){
        super(props);
        this.state = {
            tags : []
        }

    }

    componentDidMount (){
        this.fetchHotTags();
    }

    fetchHotTags =()=>{
        let url = '/Index/Index/allTags';
        fetch(url, {
            method: 'GET'
        }).then(res => res.json()).then(
            (data) => {
                if(data.success){
                    this.setState({ ...this.state, ...{ tags: data.result } });
                }
            }
        );
    }

    clickHandler=(e)=>{
        let filter = {
            tag: e.target.dataset.value
        }

        this.props.homeFetch(filter, true);
    }

    resetHandler=()=>{
        this.props.homeFetch('', true);
    }

    render(){
        let tags = this.state.tags;
        return (
            <div className="all-tags-div">
                <div className="all-tags-title-div">热门标签：</div>
                {tags.map(item => <a href="#" onClick={this.clickHandler} key={item.id} data-value={item.tag_name}>{item.tag_name}</a>)}
                {/* <a className='all-tags-reset' href="#" onClick={this.resetHandler} key='重置' data-value={'重置'}>重置</a> */}
            </div>
        );
    }
}

export default AllTags;