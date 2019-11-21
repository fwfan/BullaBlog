import React, {Component} from 'react';

class LoadingTips extends Component {
    constructor(props){
        super(props);
        this.state ={
            loadState : 0 //0:begin, 1:loading, 2:down, 3:no data
        }

        this.getLoadingStringState = this.getLoadingStringState.bind(this);
    }

    getLoadingStringState(index = 0){
        let loadingStringState = '加载中，请稍后... ...';

        if (index == 1) {
            loadingStringState = '加载中，请稍后......';
        } else if (index == 2) {
            loadingStringState = '加载完毕!'
        } else {
            loadingStringState = '别划拉了，我也是有底线的';
        }

        return loadingStringState;
    }

    render(){
        let {loadState} = this.props;
        let style = {
            height: '50px',
            textAlign: 'center',
        }

        return (
            <div style={style}>{this.getLoadingStringState(loadState)}</div>
        );
    }

}


export default LoadingTips;