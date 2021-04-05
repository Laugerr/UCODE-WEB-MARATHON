<?php
 class EatException extends Exception {
    public function __construct($message = "", $code = 0, Throwable $previous = null) {
        parent::__construct("No more junk food, dumpling", $code, $previous);
     }
 }
?>