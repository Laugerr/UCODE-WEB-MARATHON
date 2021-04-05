<?php
 
 class Product {
 	
    private $name = "";
    
    private $kcal_per_portion = 0;
    
    public function __construct($name, $kcal_per_portion) {
    	$this->name = $name;
        $this->kcal_per_portion = $kcal_per_portion;
    }
    
    public function getName() {return $this->name;}
    
    public function setName($newName) {$this->name = $newName;}
    
    public function getKcal() {return $this->kcal_per_portion;}
    
    public function setKcal($newKcal) {$this->kcal_per_portion = $newKcal;}
 }
?>