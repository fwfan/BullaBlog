/* 
事件监听器
*/

class EventManager {
    constructor() {
        this._events = {}
    }

    /*
    监听事件
    event:事件名称，
    callback:回调方法
     */
    on(event, callback) {
        let callbacks = this._events[event] || [];
        callbacks.push(callback);
        this._events[event] = callbacks;
        return this;
    }

    /* 
    解除监听事件
    event:事件名称，
    callback:回调方法
    */
    off(event, callback) {
        let callbacks = this._events[event];
        this._events[event] = callbacks && callbacks.filter(fn => fn !== callback);
        return this;
    }

    /* 
    触发事件
    arg:参数
    */
    fireEvent(...args) {
        let event = args[0];
        let params = [].slice.call(args, 1);
        let callbacks = this._events[event];
        callbacks.forEach(fn=>fn.apply(this, params));
        return this;
    }

}