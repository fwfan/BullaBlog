import { MODIFY_HOME_PAGENUM } from './actionTypes.js';

const initialHomePageNum = {
    pageNum : 0
}


// 定义reducer，第一个参数为state，赋予默认值为上边定义的initializeState，
// 第二个参数为action，并return一个state  
// 并且抛出这个countReducer
function pageReducer(state = initialHomePageNum, action) {
    debugger
    switch (action.type) {
        case MODIFY_HOME_PAGENUM:
            return { pageNum: action.pageNum }
        default:
            return state;
    }
}

export default pageReducer;
