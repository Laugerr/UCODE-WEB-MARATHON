String.prototype.removeDuplicates = function() {
    this.str = '';
    for (let i = 0; i < this.length; i++) {
        if (!(this[i] == ' ' && this[i - 1] == ' '))
            this.str += this[i];
    }
    this.str = this.str.split(' ');
    for (let i = 0; i < str.length; i++) {
        let index = this.str.indexOf(str[i], i + 1);
        if (index != -1) {
            this.str.splice(index, 1);
            i--;
        }
    }
    return this.str.join(' ');
}


// let str = "Giant Spiders?   What’s next? Giant Snakes?";
// console.log(str);
// // Giant Spiders?   What’s next? Giant Snakes?
// str= str.removeDuplicates();
// console.log(str);// Giant Spiders? What’s next? Snakes?
// str= str.removeDuplicates();
// console.log(str);// Giant Spiders? What’s next? Snakes?
// str= ". . . . ? . . . . . . . . . . . ";
// console.log(str);
// // . . . . ? . . . . . . . . . . .
// str = str.removeDuplicates();
// console.log(str);// . ?