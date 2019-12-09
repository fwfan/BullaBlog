<?php
namespace app\demo\controller;

class Demo extends \think\Controller
{
    public function demo()
    {
        return $this->fetch('demo');
    }

    
}
