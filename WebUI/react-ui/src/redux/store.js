import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userMoodReducer from './reducers/userMoodReducer.js';
import processBarReducer from './reducers/ProcessBarReducer';

// createStore方法是用来创建store的，combineReducers方法是用来合并多个reducer的

// 创建根reducer，利用combineReducers合并多个reducer，此处还未定义reducer，所以暂空
const rootReducer = combineReducers({
    userMoodReducer, processBarReducer
});

 // 创建store，第一个参数是根reducer，第二个参数可以是初始化的state
const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());
export default store;



