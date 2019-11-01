import { ADD_COUNT } from "./actionTypes";

// 定义初始化的数据，根据实际数据即可
const initializeState = {
    count : 1
}

// 定义reducer，第一个参数为state，赋予默认值为上边定义的initializeState，
// 第二个参数为action，并return一个state  
// 并且抛出这个countReducer
function countReducer(state = initializeState, action){
    switch (action.type){
        case ADD_COUNT:
            return {count: state.count + 1}
        default :
            return state;
        }
}

export default countReducer;