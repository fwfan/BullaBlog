import  * as types from './actionTypes.js';

export function beforeFetch(){
    return {
        type: types.BEFORE_FETCH
    }
}

export function failFetch() {
    return {
        type: types.FETCH_FAIL,
        homeContent: ''
    }
}
export function successFetch(res) {
    return {
        type: types.FETCH_SUCCESS,
        homeContent : res
    }
}
export function modifyPageNum(num) {
    return {
        type: types.MODIFY_HOME_PAGENUM,
        homeContentPageNum : num
    }
}