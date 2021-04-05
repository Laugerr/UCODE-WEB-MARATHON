<?php 

class Ant {
    public $name;
    public $role_in_army;
    public $number_of_fights;
    public $number_of_legs;
    public $date_fo_entry;

    function __construct($name, $role_in_army, $date_fo_entry, $number_of_fights, $number_of_legs){
        $this->name = $name;
        $this->role_in_army = $role_in_army;
        $this->date_fo_entry = $date_fo_entry;
        $this->number_of_fights = $number_of_fights;
        $this->number_of_legs = $number_of_legs;
    }


    public function __wakeup() {
        error_reporting(0);
        echo "name: " . $this->name . "\n";
        echo "role_in_army: " . $this->role_in_army . "\n";
        echo "date_fo_entry: " . $this->date_fo_entry . "\n";
        echo "number_of_fight: " . $this->number_of_fights . "\n";
        echo "number_of_legs: " . $this->number_of_legs . "\n";
    }

}
?>