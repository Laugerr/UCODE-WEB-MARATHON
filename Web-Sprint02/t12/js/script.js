function concat(...String) {
    concatSecondString.count = 0;

    function concatSecondString() {
        let str = prompt("Insert a String: ");
        if (str === null)
            return String[0];
        concatSecondString.count++;
        return String[0].concat(" ", str);
    }

    if (String.length == 1)
        return concatSecondString;
    if (String.length == 2) {
        return String[0].concat(" ", String[1]);
    }
}