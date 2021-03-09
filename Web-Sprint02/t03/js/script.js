var chooseNumber = Number(prompt("Choose a number from 1 to 10"));

while(chooseNumber > 10 || chooseNumber < 1 || Number.isNaN(chooseNumber)){
    chooseNumber = Number(prompt("Try again"))
}
switch (chooseNumber) {
    case 1: 
        alert("Black to square 1");
        break;
    case 2:
        alert("Goody 2-shoes");
        break;
    case 3: 
    case 6:
        alert("Two's company, three's a crowd");
        break;
    case 4: 
    case 9:
        alert("Counting sheep");
        break;
    case 5:
        alert("Take five");
        break;
    case 7:
        alert("Seventh heaven");
        break;
    case 8:
        alert("Behind the eight-ball");
        break;
    case 10:
        alert("Cheaper by the dozen");

}

