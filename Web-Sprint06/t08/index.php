<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>What about forms?</title>
</head>
<body>
    <form action="index.php" method="POST">
    <h1>Winner Winner...</h1>
    <input type="radio" name="answer" value="Nat that one">Freaking Bitter!<br>
    <input type="radio" name="answer" value="Ma boi!<3"><span>Chicken Dinner!</span><br>
    <input type="radio" name="answer" value="-_- what a joke"><span>Tcha-Tchah</span><br><br>
    <input type="submit" value="I made a choice!"><br><br>
    </form>
    <?php
        $answer = $_POST["answer"];
        echo $answer;
    ?>
</body>
</html>