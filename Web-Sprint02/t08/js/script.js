function checkBrackets(string) {
    var arr = []; // creating an empty array so we can add needed characters to it.
    if (typeof(string) != "string") {
        return -1;
    }
    else {
        for (let i = 0; i <= string.length; i++) {
            if (string[i] == '('){
                arr.push('(');
            }
            else if (string[i] == ')'){
                arr.push(')');
            } 
        }
        arr = arr.join("");
        for (let i = 0; i <= string.length; i++) {
            arr = arr.replace(/\(\)/, "");
        }
    }
    return arr.length;
}
checkBrackets();
