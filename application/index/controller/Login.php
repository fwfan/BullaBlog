<?php

namespace app\index\controller;

use think\Db;
use think\Request as ThinkRequest;
use think\Request;

class Login
{
    public function login(Request $request)
    {
        $userName = 'admin123';
        $password = 'f110112119';

        if ($request->isPost()) {
            $cUserName = $request->param('username');
            $cPassWord = $request->param('password');
            $cLoginType = $request->param('loginType');

            //if($cLoginType == 'session'){
                session_start();
                if(trim($cUserName) == $userName && trim($cPassWord) == $password){
                    $_SESSION['isLogin'] = true;
                    $_SESSION['isAdmin'] = true;
                    return formatResult(true, [], '登录成功');
                }else{
                    if(isset($_SESSION["isLogin"]) && $_SESSION["isLogin"] === true){
                        session_destroy();
                    }
                    return formatResult(false, [], '用户名或密码错误');
                }
            // }else{
                
            // }
        }

        if($request->isGet()){
            if(isset($_SESSION["isLogin"]) && $_SESSION["isLogin"] === true){
                return formatResult(true, [], '');
            }else{
                return formatResult(false, [], '未登录');
            }
        }
        
    }

    public function validateLogin()
    {
        
    }


}
