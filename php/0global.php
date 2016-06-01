<?php
//phpinfo();
$var = "str";

function changeGlobal(){
    $GLOBALS["var"] = "int";
}

changeGlobal();
var_dump($var);
