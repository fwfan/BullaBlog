<?php
namespace app\index\controller;

use think\Db;
use think\Request as ThinkRequest;
use think\Request;

class Index
{
    public function index()
    {
        
        return '<script>window.location.href="http://127.0.0.12:8088/WebUI/"</script>';
        //return '<script>window.location.href="http://182.61.5.126:80/WebUI/"</script>';
    }

    public function subIndex($start=10, $limit = 5)
    {
        $start = (int)$start;
        $limit = (int)$limit;
        $sql = "select * from content ";
        $condition = " where ";
        $limitSql = " order by uid desc limit ?, ? ";
        if(array_key_exists('tag', $_GET) && $_GET['tag']){
            $condition = $condition.' tags like "%'. $_GET['tag']. '%" ';
            $sql = $sql . $condition;
        }

        $sql = $sql. $limitSql;

        $result = Db::query($sql, [$start, $limit]);
        return formatResult(true, $result, '');
    }

    public function getArticle($uid=0){
        $uid = (int)$uid;
        $result = Db::query("select * from content where uid=?", [$uid]);
        return formatResult(true, $result, '');
    }

    public function getVisitorNum () {
        $visitorIp = (string)getVisitorIp();

        if($visitorIp == 'unknown'){
            
        }else{
            $result = Db::query('select * from  visitor where ip=inet_aton(?)',[$visitorIp]);
            
            if(count($result) > 0){
                $num = $result[0]['dayCount'] + 1;
                $result = Db::query('update visitor SET dayCount=? where ip=inet_aton(?)', [$num, $visitorIp]);
            }else{
                $result = Db::query('insert into visitor values (inet_aton(?), ?, ?, ?)',[$visitorIp, 1 , '', time()]);
            }
        }

        $queryRes = Db::query('SELECT COUNT(*) as sumNum FROM `visitor`');
        return formatResult(true, $queryRes, '');

    }


    //获取心情
    public function userMood (Request $request) {
        if($request->isGet()){
            $result = Db::query('select * from mood ORDER BY submitTime desc limit 2');
            if($result){
                return formatResult(true, $result, '');
            }else{
                return formatResult(false, $result, '');
            }
            
        }

        if($request->isPost()){
            $visitorIp = (string) getVisitorIp();
            $areaValue = $request->param('editMood');
            $time = time();
            $result = Db::execute('insert into mood values (?, inet_aton(?), ?)', [$areaValue, $visitorIp, $time]);

            if ($result) {
                return formatResult(true, $result, '');
            } else {
                return formatResult(false, $result, '');
            }
        }
    }

    //获取所有的tags标签
    public function allTags(){
        $result = Db::query('select * from  tags order by hot desc limit 5');

        if($result){
            return formatResult(true, $result, '');
        }else{
            return formatResult(false, $result, '');
        }
    }

}
