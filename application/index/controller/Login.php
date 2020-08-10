<?php

namespace app\index\controller;

use think\Db;
use think\Request as ThinkRequest;
use think\Request;

class Login
{

    const salt = ["#", "*", "0", "$", "&", "(", "!", "^", "~", "."];

    public function login(Request $request)
    {

        if ($request->isPost()) {
            $cUserName = $request->param('username');
            $cPassWord = $request->param('password');
            $cLoginType = $request->param('loginType');

            if ($cLoginType == 'session') {
                session_start();
                $result = Db::query("select * from user where name=? and password=? ", [trim($cUserName), trim($cPassWord)]);
                if (count($result) > 0) {
                    $_SESSION['isLogin'] = true;
                    $_SESSION['isAdmin'] = true;
                    return formatResult(true, [], '登录成功');
                } else {
                    if (isset($_SESSION["isLogin"]) && $_SESSION["isLogin"] === true) {
                        session_destroy();
                    }
                    return formatResult(false, [], '用户名或密码错误');
                }
            } else {

                $result = Db::query("select * from user where name=? and password=? ", [trim($cUserName), trim($cPassWord)]);
                if (count($result) > 0) {
                    $salt = $this->getSalt();
                    $token = md5($salt.trim($cUserName).trim($cPassWord));
                    $userId = $result[0]['id'];
                    Db::query("update user set token = ?, loginTime= ?, expiration= ? where id=? ", [$token, time(), 60,$userId]);

                    $returnResult = ["token" => $token];

                    return  formatResult(true, $returnResult, '');

                }else{ 
                    return formatResult(false, [], '用户名或密码错误');
                }
            }
        }

        if ($request->isGet()) {
            $cLoginType = '';
            $token = '';
            if(isset($_GET['loginType'])){
                $cLoginType = $_GET['loginType'];
            }

            if(isset($_GET['token'])){
                $token = $_GET['token'];
            }

            if($cLoginType == 'session'){
                session_start();
                if (isset($_SESSION["isLogin"]) && $_SESSION["isLogin"] === true) {
                    return formatResult(true, [], '');
                } else {
                    return formatResult(false, [], '未登录');
                }
            }else{
                $currentTime = time();
                $result = Db::query("select * from user where token=? ", [$token]);
                if(count($result) > 0){
                    $expiration = $result[0]["expiration"];
                    $sToken = $result[0]["token"];
                    $sLoginTime = $result[0]["loginTime"];
    
                    if($token !== $sToken || ($sLoginTime + $expiration) < $currentTime){
                        return formatResult(false, [], '登录已超时');
                    }else{
                        return formatResult(true, [], '');
                    }
                }else{
                    return formatResult(false, [], '未登录');
                }

            }

        }
    }

    public function validateLogin()
    {

    }

    private function getSalt()
    {
        $salt = '';
        foreach ($this::salt as $key => $value) {
            $salt = $salt.$this::salt[mt_rand(0, count($this::salt)-1)];
        }

        return $salt;
    }
}
