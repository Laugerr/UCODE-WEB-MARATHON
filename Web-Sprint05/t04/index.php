<?php
    function total($addCount, $addPrice, $currentTotal = 0){
    return ($currentTotal += $addPrice * $addCount);
    }
?>