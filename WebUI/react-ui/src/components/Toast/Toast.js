import React, { Component } from 'react'
import EventManager from '../EventManager/EventManager';

class ToastManager extends EventManager {
    constructor(params) {
        super(params);
    }

    info(){

    }

    success(){

    }

    fail(){

    }

    


}

class Toast extends Component {
    constructor(params){
        super(params);
        this.state={
            message:'Hello World!'
        }
    }

    render(){
        
        return (
            <div>
                {this.state.message}
            </div>

        );
    }
}



export default {Toast, ToastManager};
