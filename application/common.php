<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
    function formatResult($success=true, $result=[], $message=''){
        $data = ['success' => $success, 'result' => $result, 'message' => $message];
        return json_encode($data,true);
    }

    //获取客户端访问IP
    function getVisitorIp(){
        if (isset($_SERVER)) {
                if (isset($_SERVER['HTTP_X_FORWARDED_FOR]']) && strcasecmp($_SERVER['HTTP_X_FORWARDED_FOR'], "unknown"))//代理
                {
                        $realip = $_SERVER['HTTP_X_FORWARDED_FOR'];
                } 
                elseif(isset($_SERVER['HTTP_CLIENT_IP']) && strcasecmp($_SERVER['HTTP_CLIENT_IP'], "unknown"))
                {
                        $realip = $_SERVER['HTTP_CLIENT_IP'];
                } 
                elseif(isset($_SERVER['REMOTE_ADDR']) && strcasecmp($_SERVER['REMOTE_ADDR'], "unknown"))
                {
                        $realip = $_SERVER['REMOTE_ADDR'];
                } 
                else
                {
                        $realip = 'unknown';
                }
        } else {
                if (getenv("HTTP_X_FORWARDED_FOR") && strcasecmp(getenv("HTTP_X_FORWARDED_FOR"), "unknown"))
                {
                        $realip = getenv("HTTP_X_FORWARDED_FOR");
                }
                elseif(getenv("HTTP_CLIENT_IP") && strcasecmp(getenv("HTTP_CLIENT_IP"), "unknown"))
                {
                        $realip = getenv("HTTP_CLIENT_IP");
                } 
                elseif(getenv("REMOTE_ADDR") && strcasecmp(getenv("REMOTE_ADDR"), "unknown"))
                {
                        $realip = getenv("REMOTE_ADDR");
                } 
                else
                {
                        $realip = 'unknown';
                }
        } 
        return $realip;
    }

    

    