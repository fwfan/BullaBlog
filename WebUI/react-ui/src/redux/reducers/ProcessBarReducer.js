//进度条reducer
import { PROCESS_START, PROCESS_END, PROCESS_DOING } from '../actionTypes';
//status: init/start/doing/end/
const initializeState = {
    processStatus: {
        status: 'INIT',
        process : 0
    }
}


export default function processBarReducer(state = initializeState, action){

    switch (action.type){
        case PROCESS_START : 
            return {
                state, ...{
                    processStatus: {
                        status: 'start',
                        process: 0
                    }}}
        case PROCESS_DOING : 
            return {
                state, ...{
                    status: 'DOING',
                    process: action.process
                }}
        case PROCESS_END : 
            return {
                state, ...{
                    status: 'END',
                    process: 100
                }}
        default:
            return state;
    }
}
