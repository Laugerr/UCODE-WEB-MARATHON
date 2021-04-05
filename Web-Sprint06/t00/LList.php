<?

include __DIR__ . "/LLItem.php";

class LList implements IteratorAggregate
{

    public $head;

    public function __construct()
    {
        $this->head = null;
        $this->counter = 0;
    }

    public function add($newElement)
    {
        $newNode = new LLItem();
        $newNode->data = $newElement;
        $newNode->next = null;
        if ($this->head == null) {
            $this->head = $newNode;
        } else {
            $temp = new LLItem();
            $temp = $this->head;
            while ($temp->next != null) {
                $temp = $temp->next;
            }
            $temp->next = $newNode;
        }
        $this->counter++;
    }

    public function getFirst()
    {
        return $this->head->data;
    }

    public function getLast()
    {
        $temp = new LLItem();
        $temp = $this->head;
        while ($temp->next != null) {
            $temp = $temp->next;
        }
        return $temp->data;
    }

    public function addArr($array)
    {
        foreach ($array as $val) {
            $this->add($val);
        }
    }

    public function toString()
    {
        $temp = new LLItem();
        $temp = $this->head;
        if ($temp != null) {
            $arr = array();
            while ($temp != null) {
                array_push($arr, $temp->data);
                $temp = $temp->next;
            }
            echo implode(', ', $arr);
        }
    }

    public function remove($value)
    {
        $current = $previous = $this->head;

        while ($current->data != $value) {
            $previous = $current;
            $current = $current->next;
        }

        if ($current == $previous) {
            $this->head = $current->next;
        }

        $previous->next = $current->next;

        $this->counter--;
    }

    public function removeAll($value)
    {
        $temp = $this->head;
        $length = $this->counter;
        for ($i = 0; $i < $length; $i++) {
            if ($this->contains($value)) {
                $this->remove($value);
            }
        }
    }

    public function contains($value)
    {
        $temp = $this->head;

        while ($temp != null) {
            if ($temp->data == $value) {
                return 1;
            }
            $temp = $temp->next;
        }

        return 0;
    }

    public function clear()
    {
        $this->head = null;
    }

    public function count()
    {
        return $this->counter;
    }

    public function getIterator()
    {
        $temp = new LLItem();
        $temp = $this->head;
        $arr = array();
        while ($temp != null) {
            array_push($arr, $temp->data);
            $temp = $temp->next;
        }
        return new ArrayIterator($arr);
    }
};