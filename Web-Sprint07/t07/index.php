<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data to XML</title>
</head>
<body>
<h1>Avenger Quote to XML</h1>
<?php
    function autoload($pClassName) { include(__DIR__. '/' . $pClassName. '.php'); }
    spl_autoload_register("autoload");

    $avengerQuote1 = new AvengerQuote(6425595647, "Mehdi Zamel", "Sir t7wa", [ "trmto", "khorzto.jpg" ]);
    $avengerQuote1->addComment("Ara chi boussa");

    $avengerQuote2 = new AvengerQuote(1828943147, "Ayoub ras l9alwa", "Chof li y7wik", [ "trmto-7ta-howa.jpeg" ]);
    $avengerQuote2->addComment("Lmao");
    
    $avengerQuote4 = new AvengerQuote(3129332700, "Mamasita", "ma l9itoch li y7wikom", [ "Ma nbita l A7rar", "Bo terma"]);
    $avengerQuote4->addComment("A waah");
    $avengerQuote4->addComment("7ob lia zebi");

    $listAvengerQuote = new ListAvengerQuotes();
    $listAvengerQuote->addAvengerQuote($avengerQuote1);?><?php
    class ListAvengerQuotes
    {
        protected $_list = [];
        public function addAvengerQuote($avengerQuote) {
            array_push($this->_list, $avengerQuote);
        }
        public function toXML($filename) {
            $file = fopen($filename, "w");
            $xml = new SimpleXMLElement('<document/>');
            foreach ($this->_list as $quote) {
                $xml_quote = $xml->addChild("quote");
                $xml_quote->addChild("id", $quote->getId());
                $xml_quote->addChild("author", $quote->getAuthor());
                $xml_quote->addChild("quote", $quote->getQuote());
                $xml_photos = $xml_quote->addChild("photos");
                foreach((array)$quote->getPhotos() as $photo)
                    $xml_photos->addChild("photo", $photo);
                $xml_quote->addChild("publishDate", $quote->getDate());
                $xml_comments = $xml_quote->addChild("comments");
                foreach((array)$quote->getComments() as $comment) {
                    $xml_comment = $xml_comments->addChild("comment");
                    foreach((array)$comment->getDate() as $date)
                        $xml_comment->addChild("date", $date);
                    foreach((array)$comment->getText() as $text)
                        $xml_comment->addChild("text", $text);
                }
            }
            file_put_contents($filename, $xml->asXML());
            fclose($file);
        }
        public function fromXML($filename) {
            $file = fopen($filename, "r");
            $xml_obj = simplexml_load_file($filename);
            $list = new ListAvengerQuotes();
            foreach($xml_obj->children() as $quotes) {
                $id = $quotes->id->__toString();
                $author = $quotes->author->__toString();
                $quote = $quotes->quote->__toString();
                $photos = [];
                foreach ((array)$quotes->photos as $photo)
                    $photos = $photo;
                $avengerQuote = new AvengerQuote( $id, $author, $quote, $photos );
                $comments = [];
                foreach ((array)$quotes->comments as $comment)
                    $comments = $comment;
                $avengerQuote->setComments($comments);
                $list->addAvengerQuote($avengerQuote);
            }
            fclose($file);
            return $list;
        }
    }
    $listAvengerQuote->addAvengerQuote($avengerQuote2);
    $listAvengerQuote->addAvengerQuote($avengerQuote4);
    $listAvengerQuote->toXML("file.xml");

    echo '<table><tr><td><pre>';
    print_r($listAvengerQuote); 
    echo '</pre></td><td><pre>';
    print_r($listAvengerQuote->fromXML("file.xml"));
    echo '</pre></td></tr></table>';
?>