<?php
    setcookie('pwd', $inputpwd);
    setcookie('pwd1', $inputpwd1);
    setcookie('pass1', $_POST['pswrdd']);
    setcookie('pass2', $_POST['pswrd']);
    if($_POST['pswrdd']){
        $_COOKIE['pass1'] = $_POST['pswrdd'];
    }
    if($_POST['pswrd']){
        $_COOKIE['pass2'] = $_POST['pswrdd'];
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Hack it!</title>
        <meta name="description" content="t02. Hacked it!">
    </head>
    <body>
        <h1>Password</h1>
        <form method="POST" action="index.php">
        <?php
            $inputpwd ="<p id=\"hack\">Hacked!</p>" . "<p id=\"denied\">Access denied!</p>" 
            . "<div id=\"sec1\">" 
            . "<style>#hack,#denied{display:none;}</style>" 
            . "Password not saved at session." 
            . "<br>Password for saving to session <input type=\"password\" name=\"pswrd\" placeholder=\"Password to session\">" 
            . "<br>Salt for saving to session <input type=\"password\" name=\"salt\" placeholder=\"Salt to session\">" 
            . "<br><input type=\"submit\" value=\"Save\"></div>";
            $_COOKIE['pwd'] = $inputpwd;
            print($_COOKIE['pwd']);
            $password = $_POST['pswrd'];
            if($_POST['pswrd']){
                $inputpwd = 
                "<style>#sec1{display:none;}</style>"
                . "Password saved at session." 
                . "<br>Hash is " . password_hash($_COOKIE['pswrd'], PASSWORD_DEFAULT)
                . "<br>Try to guess: <input type=\"password\" name=\"pswrdd\" placeholder=\"Password to session\"><input type=\"submit\" value=\"Check password\">" 
                . "<form action=\"forget\" method=\"POST\">"
                . "<br><input type=\"submit\" value=\"Clear\"></form>";
                $_COOKIE['pwd1'] = $inputpwd1;
                print($inputpwd); 
            }
            if(isset($_COOKIE['pass2']) && isset($_COOKIE['pass1']) && $_COOKIE['pass2'] == $_COOKIE['pass1']){
                echo "<style>#hack{display:block; color: #00ff00;margin-buttom: 50px;}</style>";
            }elseif(isset($_COOKIE['pass2']) && isset($_COOKIE['pass1']) && $_COOKIE['pass2'] != $_COOKIE['pass1']){
                echo "<style>#denied{display:block; color: #ff0000;margin-buttom: 50px;}</style>";
            }else{

            }
        ?>
        </form>
    </body>
</html>