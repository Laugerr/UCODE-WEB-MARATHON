function total(addCount, addPrice, currentTotal = 0){
    return +(currentTotal += addPrice * addCount).toFixed(2);
}