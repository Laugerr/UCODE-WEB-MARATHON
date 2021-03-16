var hero = document.querySelector('#hero');
function transformation(){
    if(hero.innerHTML == "Hulk"){
        hero.innerHTML = "Bruce Banner";
        hero.style= 'font-size: 60px; letter-spacing: 2px;';
        document.querySelector('#lab').style = 'background: #ffb300;'
    }
    else if(hero.innerHTML == "Bruce Banner"){
        hero.innerHTML = "Hulk";
        hero.style= 'font-size: 130px; letter-spacing: 6px;';
        document.querySelector('#lab').style = 'background: #70964b;'
    }
}