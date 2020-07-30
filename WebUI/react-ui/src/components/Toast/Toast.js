import React, { Component } from 'react'
import EventManager from '../EventManager/EventManager';
import './Toast.css';

var EventManagerExmaple = new EventManager();

class ToastManager extends Component {

    info = () => {
        EventManagerExmaple.fireEvent('info');
    }

    success = () => {
        EventManagerExmaple.fireEvent('success');
    }

    fail = () => {
        EventManagerExmaple.fireEvent('fail');
    }

}


class Toast extends Component {
    constructor(params) {
        super(params);

        this.state = {
            message: '',
            status: 'hide',
            style: {}
        }
    }

    componentDidMount() {
        this.EventManagerExmaple = EventManagerExmaple.on('info', this.info);
        this.EventManagerExmaple = EventManagerExmaple.on('success', this.success);
        this.EventManagerExmaple = EventManagerExmaple.on('fail', this.fail);
    }

    componentWillUnmount() {
        this.EventManagerExmaple = EventManagerExmaple.un('info', this.info);
        this.EventManagerExmaple = EventManagerExmaple.un('success', this.success);
        this.EventManagerExmaple = EventManagerExmaple.un('fail', this.fail);
    }

    info = (msg = '网络一线牵，珍惜这段缘^_^', timeout = 3000, callback, style = { backgroundColor: 'rgb(86, 184, 241)' }, item) => {
        this.setState({
            state, ...{
                message: msg,
                status: 'show',
                style: style
            }
        });
        let state = this.state;
        setTimeout(() => {
            this.setState({
                state, ...{
                    status: 'hide',
                    style: style
                }
            });
            if (typeof callback === 'function') {
                callback();
            }
        }, timeout);
    }

    success = (msg = '服务器收到您的消息啦~~', timeout = 3000, callback, style = { backgroundColor: 'rgb(157, 252, 169)' }, item) => {
        let state = this.state;

        this.setState({state,...{
            message: msg,
            status: 'show',
            style: style
        }});


        setTimeout(() => {
            this.setState({
                state, ...{
                    status: 'hide',
                    style: style
                }
            });
            if (typeof callback === 'function') {
                callback();
            }
        }, timeout);
    }

    fail = (msg = '服务器没有收到您的消息—_—!', timeout = 3000, callback, style = { backgroundColor: 'rgb(247, 159, 137)' }, item) => {
        this.setState({
            state, ...{
                message: msg,
                status: 'show',
                style: style
            }
        });
        let state = this.state;
        setTimeout(() => {
            this.setState({
                state, ...{
                    status: 'hide',
                    style: style
                }
            });
            if (typeof callback === 'function') {
                callback();
            }
        }, timeout);
    }

    render() {
        return (
            <div className={this.state.status === 'show' ? 'toast-show-div' : 'toast-hide-div'} style={this.state.style}>
                {this.state.message}
            </div>
        );
    }
}
var ToastManagerExample = new ToastManager();

export { Toast, ToastManagerExample };
