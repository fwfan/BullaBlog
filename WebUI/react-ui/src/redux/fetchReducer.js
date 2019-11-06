import {FETCH_FAIL, FETCH_SUCCESS, BEFORE_FETCH} from './actionTypes.js';

// 定义初始化的数据，根据实际数据即可
const initializeState = {
    homeContent: []
}

// 定义reducer，第一个参数为state，赋予默认值为上边定义的initializeState，
// 第二个参数为action，并return一个state  
// 并且抛出这个countReducer
function fetchReducer(state = initializeState, action) {
    switch (action.type) {
        case FETCH_FAIL:
            return { homeContent: []}
        case FETCH_SUCCESS:
            return { homeContent: action.homeContent}
        case BEFORE_FETCH:
            return { homeContent : []}
        default:
            return state;
    }
}

export default fetchReducer;