<?php

class Ingestion {
    private $id = 0;
   private $meal_type = array("breakfast", "lunch", "dinner");
   private $day_of_diet = 0;
   private $products = [];
   
   
   public function getProducts() {return $this->products;}
   
   public function setProduct($product) {
       $this->products[$product->getName()] = $product;
   }
   
   public function get_from_fridge($product) {
       if ($this->products[$product]->getKcal() > 200) {
           throw new EatException();
       }
   }
}

?>