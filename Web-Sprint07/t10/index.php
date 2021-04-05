<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Make square image</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <h1>Make square image</h1>
    <form method="post">
        <input type="text" name="url" placeholder="Image url..."><br><br>
        <input type="submit" value="GO">
    </form>
    <?php
        function SplitRGBChannels($img){
            $width = ImagesX($img);
            $height = ImagesY($img);
            $channel_red = ImageCreateTrueColor($width, $height);
            $channel_green = ImageCreateTrueColor($width, $height);
            $channel_blue = ImageCreateTrueColor($width, $height);

            for($row = 0; $row < $width; $row++){
                for($col = 0; $col < $height; $col++){             
                    $pixel = ImageColorAt($img, $row, $col);
                    $colors = ImageColorsForIndex($img, $pixel);
                    $red_color = ImageColorAllocate($channel_red, $colors['red'], 0, 0);
                    $green_color = ImageColorAllocate($channel_green, 0, $colors['green'], 0);
                    $blue_color = ImageColorAllocate($channel_blue, 0, 0, $colors['blue']);
                    ImageSetPixel($channel_red, $row, $col, $red_color);
                    ImageSetPixel($channel_green, $row, $col, $green_color);
                    ImageSetPixel($channel_blue, $row, $col, $blue_color);
                }
            }
            imagejpeg($channel_red, 'red.jpeg');
            imagejpeg($channel_green, 'green.jpeg');
            imagejpeg($channel_blue, 'blue.jpeg');
            imagedestroy($channel_red);
            imagedestroy($channel_green);
            imagedestroy($channel_blue);
        }
        if ($_POST["url"]) {
            $url = $_POST["url"];
            $im = preg_match("/\.png$/", $url) ?imagecreatefrompng($url) : imagecreatefromjpeg($url) ;
            $im = imagescale($im, 500);
            $size = min(imagesx($im), imagesy($im));
            $im2 = imagecrop($im, ['x' => 0, 'y' => 0, 'width' => $size, 'height' => $size]);
            if ($im2 !== FALSE) {
                imagejpeg($im2, 'cropped.jpeg');
                SplitRGBChannels($im2);
                echo("<div id=\"grid\">");
                echo("<img src=\"cropped.jpeg\">");
                echo("<img src=\"red.jpeg\">");
                echo("<img src=\"green.jpeg\">");
                echo("<img src=\"blue.jpeg\">");
                echo("</div>");
                imagedestroy($im2);
            }
            imagedestroy($im);
        }
    ?>
    </body>
</html>