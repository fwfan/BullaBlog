import React, { Component } from 'react'
import EventManager from '../EventManager/EventManager';
import  './Toast.css';

var EventManagerExmaple = new EventManager();

class ToastManager extends Component{
    constructor(params) {
        super(params);
    }

    info = () => {
        EventManagerExmaple.fireEvent('info');
    }

    success = () => {

    }

    fail = () => {

    }

    render(){
        return (<div></div>);
    }
}


//var ToastManagerExample = new ToastManager();

class Toast extends Component {
    constructor(params) {
        super(params);

        this.state = {
            message: '提交成功',
            status: 'hide'
        }
    }

    componentDidMount() {
        this.EventManagerExmaple = EventManagerExmaple.on('info', this.info);
    }

    componentWillUnmount(){
        this.EventManagerExmaple = EventManagerExmaple.un('info', this.info);
    }

    info = (msg) => {
        this.setState({
            message: '提交成功!',
            status: 'show'
        });
        setTimeout(()=>{
            this.setState({
                message: '提交成功!',
                status: 'hide'
            });
        }, 3000);
    }

    render() {
        const height = document.body.clientHeight;
        const width = document.body.clientWidth;
        
        let position = {

        }

        return (
            <div className={this.state.status == 'show' ? 'toast-show-div' : 'toast-hide-div'} style={position}>
                {this.state.message}
            </div>
        );
    }
}
var ToastManagerExample = new ToastManager();

export { Toast, ToastManagerExample};
