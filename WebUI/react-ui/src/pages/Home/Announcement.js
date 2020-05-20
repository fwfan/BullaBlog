import React, {Component}from 'react';
import './Home.css';

class Announcement extends Component {
    constructor(props){
        super(props);
        this.state ={
            visitorNumber : 0,
            getVisitorNumUrl: '/Index/Index/getVisitorNum'
        }

        this.fetchVisitorNumber = this.fetchVisitorNumber.bind(this);
    }

    componentDidMount(){
        this.fetchVisitorNumber();
    }

    fetchVisitorNumber(){
        let url = '/Index/Index/getVisitorNum';

        fetch(url, {
            method: 'GET'
        }).then(res => res.json()).then(
            (data) => {
                if (data.result.length === 0) {

                } else {
                    this.setState({
                        visitorNumber: data.result[0]['sumNum']
                    });
                }
            }
        )
    }

    render(){

        let contentStyle = {
            width :'100%',
            height : '300px',
            backgroundColor : 'white',
            padding :'10px 10px 10px 10px',
            borderRadius: '2px'
        }

        return (
            <div className="announcement-div" style={contentStyle}>
               <div className="announcement-visitor-number">今日访问人数：{this.state.visitorNumber}</div>
            </div>
        );
    }
}

export default Announcement;