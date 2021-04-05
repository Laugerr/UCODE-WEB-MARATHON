<?php
    setcookie('form', $input);
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Session for new</title>
        <meta name="description" content="t01. Session for new" charset="utf-8">
    </head>
    <body>
        <h1>Superhero Form</h1>
        <form action="index.php" method="POST">
            <fieldset id="form3">
                <fieldset>
                    <legend>About HERO</legend>
                        <label for="realname">Real Name</label>
                        <input type="text" name="realname" placeholder="Superhero real name">
                        <label for="heroalias">Current Alias</label>
                        <input type="text" name="heroalias" placeholder="Current Alias">
                        <label for="age">Age</label>
                        <input type="number" min="1" max="999" name="age" step="1"><br><br>
                        <label for="about">About </label>
                        <textarea name="about" rows="5" cols="68" minlength="70" maxlength="500" placeholder="Information about the superhero, max 500 symbols"></textarea><br><br>
                        <label for="photo">Photo:</label>
                        <input type="file" name="photo" value="upload"> 
                    
                </fieldset>
                <fieldset>
                    <legend>Powers</legend>
                        <input type="checkbox" name="checkbox" value="2">
                        <label for="check">Strength</label>
                        <input type="checkbox" name="checkbox" value="2">
                        <label for="check">Speed</label>
                        <input type="checkbox" name="checkbox" value="2">
                        <label for="check">Intelligence</label>
                        <input type="checkbox" name="checkbox" value="2">
                        <label for="check">Teleportation</label>
                        <input type="checkbox" name="checkbox" value="2">
                        <label for="check">Immortal</label>
                        <input type="checkbox" name="checkbox" value="2">
                        <label for="check">Another</label><br><br>
                        <label for="level">Level of control:</label>
                        <input type="range" name="level" step="1" min="0" max="10">
                </fieldset>
                <fieldset>
                    <legend>Publicity</legend>
                        <input type="radio" name="Origin" value="2">
                        <label for="Origin">UNKNOWN</label>
                        <input type="radio" name="Origin" value="2">
                        <label for="Origin">LIKE A GHOST</label>
                        <input type="radio" name="Origin" value="2">
                        <label for="Origin">I AM IN COMICS</label>
                        <input type="radio" name="Origin" value="2">
                        <label for="Origin">I HAVE FUN CLUB</label>
                        <input type="radio" name="Origin" value="2">
                        <label for="Origin">SUPERSTAR</label>
                </fieldset>
                <br>
                    <button>CLEAR</button>
                    <input type="submit" name="submit" value="SEND">
        </fieldset>
        <?php
            $photo = $_POST['photo'];
            $input =  "<pre>    <b>name: </b>" . $_POST['realname'] 
             . "<br>    <b>alias : </b>" . $_POST['heroalias'] 
             . "<br>    <b>age: </b>". $_POST['age'] 
             . "<br>    <b>description: </b>" . $_POST['about'] 
             . "<br>    <b>photo: </b><img src=\"$photo\" width=\"100px\" height=\"100px\"\/>" 
             . "<br>    <b>experience: </b>" . $_POST['Origin']
             . "<br>    <b>level: </b>" . $_POST['level'] 
             . "<br>    <b>purpose: </b>" . $_POST['checkbox'] . " </pre>" ;
             $_COOKIE['form'] = $input;
             if($_POST['realname']){
                 
                 echo "<style>#form3{display:none;}</style>" . $_COOKIE['form'];
             }
        ?>
    <form action="forget" method="POST">
        <fieldset>
            <input type="submit" name="forget" value="FORGET">
        </fieldset>
    </form>
    </form>
    </body>
</html>