<?php
namespace app\index\controller;

class Index
{
    public function index()
    {
        return '<script>window.location.href="http://127.0.0.12:8088/WebUI/"</script>';
    }

    public function subIndex()
    {
        $t1 = date('Y-m-d', time());;
        $data = ['success'=>true, 'result' =>[], 'message'=>''];
        return json_encode($data) . $t1. date('Y-m-d', time());;
    }
}
