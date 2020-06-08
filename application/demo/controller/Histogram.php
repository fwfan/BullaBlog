<?php
namespace app\demo\controller;

class Histogram extends \think\Controller
{
    public function histogram()
    {
        return $this->fetch('histogram');
    }
}