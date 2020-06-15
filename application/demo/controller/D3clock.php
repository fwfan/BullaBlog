<?php

namespace app\demo\controller;

class D3Clock extends \think\Controller
{

    public function d3Clock()
    {
        return $this->fetch('d3clock');
    }
}
