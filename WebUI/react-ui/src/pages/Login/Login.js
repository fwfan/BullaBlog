import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import "./Login.scss";
import { commonFetch } from "../../Utils/CommonFunUtils"


const LoginWin = forwardRef((props, ref) => {
    const { setUserIconLogin } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginType, setLoginType] = useState('session');
    const [visible, setVisible] = useState(false);
    const [hasInterval, setHasInterval] = useState(false);
    const [loginFail, setLoginFail] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);

    const userNameOnChangeHandler = (event) => { setUsername(event.target.value) };
    const passwordOnChangeHandler = (event) => { setPassword(event.target.value) };
    const loginTypeOnChangeHandler = (event) => { setLoginType(event.target.value) };

    const emptyFun = () => { }
    const clearForm = () => {
        setUsername('');
        setPassword('');
    }

    const showLoginWin = () => setVisible(true);

    const cancelBtnHandler = () => {
        setLoginFail(false);
        visible ? setVisible(false) : emptyFun();
    }

    const loginFetchCallback = (data) => {
        setUserIconLogin(data.success);
        if (data.success) {
            setVisible(false);
            setLoginFail(false);
        } else {
            setLoginFail(true);
        }
        setLoginStatus(false);
    }

    const getLoginStatusCallback = (data) => {
        setUserIconLogin(data.success);
    }

    const loginOut = () => {
        commonFetch('index/Login/login')('post')(() => { }, {});
    }

    useImperativeHandle(ref,
        () => ({
            loginOut, showLoginWin
        })
    )

    useEffect(() => {
        visible ? clearForm() : emptyFun();
        if (!hasInterval) {
            setHasInterval(true);
            setInterval(getLoginStatus, 10000);
        }
    }, [visible]);

    const loginFetch = () => {
        setLoginFail(false);
        if (username && password) {
            setLoginStatus(true);
            commonFetch('/index/Login/login')('post')(loginFetchCallback, { username, password, loginType });
        } else {

        }
    }

    const getLoginStatus = () => {
        commonFetch('/index/Login/login')('get')(getLoginStatusCallback);
    }

    const loginInfoStyle = () => {
        return { visibility: loginFail ? 'visible' : 'hidden' }
    };

    return (
        <div className={visible ? "login-page-div" : "login-page-div-hide"}>
            <div className="login-win-div">
                <div className="login-win-title-div">
                    管理员登录
                </div>
                <div className="login-win-form">
                    <input type="text" name="username" className={username ? "login-from-field" : "login-from-field login-from-field-disable"} placeholder="用户名" maxLength="30" value={username} onChange={userNameOnChangeHandler}></input>
                    <input type="password" name="password" className={password ? "login-from-field" : "login-from-field login-from-field-disable"} placeholder="密码" maxLength="30" value={password} onChange={passwordOnChangeHandler}></input>
                    <div className="login-radio-div">
                        <label className="login-radio"><input  type="radio" checked={loginType === "session"} onChange={loginTypeOnChangeHandler} name="loginType" value="session"></input>Session</label>
                        <label className="login-radio"><input  type="radio" checked={loginType === "token"}  onChange={loginTypeOnChangeHandler} name="loginType" value="token"></input>Token</label>
                    </div>
                    <div className="login-info-div" style={loginInfoStyle()}>用户名或密码错误</div>
                    <div className="login-btn-div">
                        <button className="login-form-btn login-form-btn-login" onClick={loginFetch}>{loginStatus ? <span>登&nbsp;&nbsp;&nbsp;&nbsp;录&nbsp;&nbsp;&nbsp;&nbsp;中...</span> : <span>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</span>}</button>
                        <button className="login-form-btn login-form-btn-cancel" onClick={cancelBtnHandler}>取&nbsp;&nbsp;&nbsp;&nbsp;消</button>
                    </div>
                </div>
                <div className="login-win-tips">
                </div>
            </div>
        </div>
    )
})

export default LoginWin;