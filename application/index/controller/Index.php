<?php
namespace app\index\controller;

use think\Db;

class Index
{
    public function index()
    {
        //return '<script>window.location.href="http://127.0.0.12:8088/WebUI/"</script>';
        return '<script>window.location.href="http://127.0.0.1:80/WebUI/"</script>';
    }

    public function subIndex($start=10, $limit = 5)
    {
        $start = (int)$start;
        $limit = (int)$limit;

        $result = Db::query("select * from content limit ?, ?", [$start, $limit]);
        $data = ['success'=>true, 'result' => $result, 'message'=>''];
        return formatResult($data);
    }
}
