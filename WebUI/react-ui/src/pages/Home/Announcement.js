import React, {Component}from 'react';

class Announcement extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        let titleStyle = {
            textAlign :'center',
            fontWeight :'bold',
            width : '100%',
            height :'30px'
        }

        let contentStyle = {
            width :'100%',
            height : '80px'
        }

        let containerStyle = {
            display : 'none',
            padding : '20px 20px 20px 0px'
        } 

        return (
            <div style={containerStyle}>
                <div style={titleStyle}>公告</div>
                <div>地震预警四川省重点实验室主任、成都高新减灾研究所所长王暾博士表示，“村村响”接入地震预警功能，是在各地各级政府的授权下、相关单位紧密合作的结果，是打通地震预警“最后一公里”的重要渠道。</div>
            </div>
        );
    }
}

export default Announcement;