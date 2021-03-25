<?php
    function firstUpper($str){
        if (gettype($str) == "string"){
            $str = strtolower(trim($str, " "));
        }return ucfirst($str);
    }
?>