import { ADD_COUNT}from './actionTypes.js';

export function addCount(){
    return {
        type : ADD_COUNT
    }
}

export function beforeFetch(){
    return {
        type : BEFORE_FETCH
    }
}
