<?php
    setcookie('count', isset($_COOKIE['count']) ? ++$_COOKIE['count'] : 1, time()+60);
    $visitCount = $_COOKIE['count'];
?>
<html> 
    <head> 
        <title>Count Page Access</title> 
    </head> 
    <body> 
        <h1>Cookie counter</h1>
        <?if (!$_COOKIE['count']):?>
            <h4>This is the first time you have viewed this page.</h4>
        <?else:?>
             <h4>You have viewed this page <b style="color :blue"><?=  $_COOKIE['count'] ?></b> times.</h4>
        <?endif;?>
    </body> 
</html>