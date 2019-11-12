import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import fetchReducer from './fetchReducer.js';
import pageReducer from './homePageNumReducer.js';
// createStore方法是用来创建store的，combineReducers方法是用来合并多个reducer的

// 创建根reducer，利用combineReducers合并多个reducer，此处还未定义reducer，所以暂空
const rootReducer = combineReducers({
    fetchReducer, pageReducer
});

 // 创建store，第一个参数是根reducer，第二个参数可以是初始化的state
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;



