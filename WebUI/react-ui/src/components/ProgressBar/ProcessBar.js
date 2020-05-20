import React, { Component } from 'react'
import './processbar.scss'
import EventManager from '../EventManager/EventManager';

var eventManager = new EventManager();

class ProcessManager extends Component{

    constructor (props){
        super(props);
    }   

    setProcess=(config)=>{
        eventManager.fireEvent('change', config);
    }

    startProcess=(config={})=>{
        eventManager.fireEvent('start', config);
    }

    endProcess = (config)=>{
        eventManager.fireEvent('end', config);
    }

}

class ProcessBar extends Component {

    constructor(props) {
        super(props);
        //INIT/START/DODING/END
        this.state = {
            status : 'INIT',
            width : '0',
            height : '0',
            backgroundColor : 'green'
        }
    }

    updateState=(config)=>{
        let originalState = this.state;
        this.setState({originalState, ...config});
    }

    startProcess=(config)=>{
        this.updateState({
            status : 'START',
            width: '10%',
            height: '4px',
        });
        setTimeout(()=>{
            if(this.state.status === 'INIT'){
                this.endProcess();
                return
            }else{
                this.updateState({
                    width: '20%',
                    height: '4px',
                });
            }

            setTimeout(() => {
                if (this.state.status === 'INIT') {
                    this.endProcess();
                    return
                }else{
                    this.updateState({
                        width: '40%',
                        height: '4px',
                    })
                }

                setTimeout(() => {
                    if (this.state.status === 'INIT') {
                        this.endProcess();
                        return
                    }else{
                        this.updateState({
                            width: '80%',
                            height: '4px',
                        })
                    }

                    setTimeout(() => {
                        if (this.state.status === 'INIT') {
                            this.endProcess();
                            return
                        }else{
                            this.updateState({
                                width: '90%',
                                height: '4px',
                            })
                        }
                    }, 200);
                }, 200);
            }, 200);
        }, 100);
    }

    endProcess=(config)=>{
        this.updateState({
            status : 'END',
            width: '100%',
        });
        this.updateState({
            status : 'INIT',
            width: 0,
            height : 0,
        });
    }

    componentDidMount() {
        this.eventManager = eventManager.on('change', this.updateState);
        this.eventManager = eventManager.on('start', this.startProcess);
        this.eventManager = eventManager.on('end', this.endProcess);
    }

    componentWillUnmount() {
        this.eventManager = eventManager.un('change', this.updateState);
        this.eventManager = eventManager.on('start', this.startProcess);
        this.eventManager = eventManager.on('end', this.endProcess);
    }

    render() {
        let style = {
            width : this.state.width,
            height: this.state.height,
            backgroundColor: this.state.backgroundColor
        }

        return (
            <div className="process" style={style}>

            </div>
        )
    }
}

var ProcessManagerE = new ProcessManager();
//export default connect(mapStateToProps)(ProcessBar);
export { ProcessBar, ProcessManagerE};

