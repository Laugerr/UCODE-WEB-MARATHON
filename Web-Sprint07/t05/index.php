<?php error_reporting(0); session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>Parsing CSV data</h1>
    <form action="index.php" method="post">
        Upload file:<input type="file" name="file">
        <input type="submit" value="Upload">
    </form>
    <?php
        $file = $_POST["file"];
        $getFilter = $_GET["filter"];
        $fileSession = $_SESSION['file'];
        if(($file || $fileSession) == true){
            echo "
            <form action='index.php' method='get'>
            Filter:<select name='filter'>
            ";
            if($getFilter == true){
                if($getFilter == "NOT SELECTED"){
                    echo "<option selected value='NOT SELECTED'>NOT SELECTED</option>";
                }
                if ($_GET["filter"] == "good") echo '<option selected value="good">good</option>';
                else echo '<option value="good">good</option>';
    
                if ($_GET["filter"] == "bad") echo '<option selected value="bad">bad</option>';
                else echo '<option value="bad">bad</option>';
    
                if ($_GET["filter"] == "-") echo '<option selected value="-">-</option>';
                else echo '<option value="-">-</option>';
                
                if ($_GET["filter"] == "neutral") echo '<option selected value="neutral">neutral</option>';
                else echo '<option value="neutral">neutral</option>';
            }
            else {
                echo '<option value="NOT SELECTED">NOT SELECTED</option>
                <option value="good" selected>good</option>
                <option value="bad">bad</option>
                <option value="-">-</option>
                <option value="neutral">neutral</option>';
            }
        echo   '</select>
            <input type="submit" name="apply" value="APPLY">
        </form>';
    
        $filter = "NOT SELECTED";
        if ($_GET["filter"])
            $filter = $_GET["filter"];
        if ($_POST["file"])
            $_SESSION = array();
        if (!$_SESSION["file"])
            $_SESSION["file"] = $_POST["file"];
        $newFile = fopen($_SESSION["file"], "r");
    
        echo '<style>table, td, th{border: 1px solid black;}</style><br><table>';
        if ($str_csv = fgetcsv($newFile)) {
            echo '<tr>';
            foreach($str_csv as $line)
                echo '<th>' . $line . "</th>";
            echo '</tr>';
        }
    
        while ($str_csv = fgetcsv($newFile)) {
            if (($filter == "good" && $str_csv[2] != "good") ||
                ($filter == "bad" && $str_csv[2] != "bad") ||
                ($filter == "-" && $str_csv[2] != "-") ||
                ($filter == "neutral" && $str_csv[2] != "neutral"))
                continue;
            echo '<tr>';
            foreach($str_csv as $line)
                echo '<td>' . $line . "</td>";
            echo '</tr>';
        }
        echo '</table>';
    
        fclose($newFile);
    }
    ?>
</body>
</html>