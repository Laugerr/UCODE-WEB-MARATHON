<?php
    function checkDivision($beginRange = 1, $endRange = 60){
        for ($i = $beginRange; $i <= $endRange; $i++) {
            $status = "";
            if ($i % 2 === 0){
                if($status === ""){
                    $status = " is divisible by 2";
                }else{
                    $status .= " , is even";
                }
            }
            if($i % 3 === 0){
                if($status === ""){
                    $status = " is divisible by 3";
                }else{
                    $status .= " , is divisible by 3";
                }
            }
            if($i % 10 === 0){
                if($status === ""){
                    $status = " is divisible by 10";
                }else{
                    $status .= ", is divisible by 10";
                }
            }if($status === ""){
                $status = " -";
            }
            echo "The number "." $i $status\n";
        }
    }
    checkDivision(3,7);
?>