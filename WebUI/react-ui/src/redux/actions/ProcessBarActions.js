import { PROCESS_START, PROCESS_END, PROCESS_INIT, PROCESS_DOING} from '../actionTypes';

export function processStart(process){
    return {

            type: PROCESS_START,
            process: 0

    }
}

export const setProcess = (process)=>{
    return {

            type: PROCESS_DOING,
            process: process

    }
}

export const endProcess = ()=>{
    return {

            type: PROCESS_END,
            process: 100

    }
}


