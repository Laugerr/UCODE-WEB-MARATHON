let box = document.getElementsByClassName('part2');
let choose = document.getElementsByClassName('p');
choose[0].style.borderLeft = '2px solid grey';
function Qalwa0() {
    box[0].hidden = false;
    box[1].hidden = true;
    box[2].hidden = true;
    choose[0].style.borderLeft = '2px solid grey';
    choose[1].style.borderLeft = 'none';
    choose[2].style.borderLeft = 'none';
    
}
function Qalwa1() {
    box[0].hidden = true;
    box[1].hidden = false;
    box[2].hidden = true;
    choose[0].style.borderLeft = 'none';
    choose[2].style.borderLeft = 'none';
    choose[1].style.borderLeft = '2px solid grey';
}
function Qalwa2() {
    box[0].hidden = true;
    box[1].hidden = true;
    box[2].hidden = false;
    choose[1].style.borderLeft = 'none';
    choose[0].style.borderLeft = 'none';
    choose[2].style.borderLeft = '2px solid grey';
}