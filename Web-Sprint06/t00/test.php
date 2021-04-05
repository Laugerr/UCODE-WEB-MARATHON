<?

function autoload($pClassName)
{
    include __DIR__ . "/" . $pClassName . ".php";
}

spl_autoload_register("autoload");
$list = new LList();
$list->addArr([100, 1, 2, 3, 100, 4, 5, 100]);
$list->removeAll(100);
$list->add(10);
echo $list->contains(10) . "\n";
echo $list->toString() . "\n";
$sum = 0;
$iter = $list->getIterator();
foreach ($iter as $v) {
    $sum += $v;
}

echo "$sum\n"; // 25
$list->clear();
echo $list->toString() . "\n";