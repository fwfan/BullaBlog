<?php
namespace app\index\controller;

use think\Db;

class Index
{
    public function index()
    {
        return '<script>window.location.href="http://127.0.0.12:8088/WebUI/"</script>';
    }

    public function subIndex()
    {
        $result = Db::query('select * from content');
        $data = ['success'=>true, 'result' => $result, 'message'=>''];
        return formatResult($data);
    }
}
