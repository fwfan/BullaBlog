<?php
namespace app\index\controller;

use think\Db;

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

        $result = Db::query("select * from content limit ?, ?", [$start, $limit]);
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



}
