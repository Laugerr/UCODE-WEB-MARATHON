<?php

class Avenger
{
    public $name;
    public $hero_name;
    public $gender;
    public $age;
    public $super_abilities;

    public function __construct($name, $hero_name, $gender, $age, $super_abilities)
    {
        $this->name = $name;
        $this->hero_name = $hero_name;
        $this->gender = $gender;
        $this->age = $age;
        $this->super_abilities = $super_abilities;
    }

    public function __toString()
    {

        return "name: " . $this->name . "\ngender: " . $this->gender . "\nage: " . $this->age . "\n";
    }

    public function __invoke()
    {
        $str = '';
        $str .= $this->hero_name . "\n";
        foreach ($this->super_abilities as $value) {
            $str .= $value . "\n";
        }

        echo $str;
    }
}
?>