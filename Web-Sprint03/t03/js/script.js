class Human {
    constractor(firstName, lastName, gender, age, calories){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories ;
    }
    sleepFor(){
        var pop = prompt("For how long do you want to sleep? (seconds)");
        if(/^[0-9]+$/.test(pop)){
        document.getElementById("gif").src="assets/images/sleeping.gif";
        document.getElementById("stat-title").innerHTML="I'm sleeping";
        setTimeout(function(){
            document.getElementById("stat-title").innerHTML="I'm awake";
            document.getElementById("gif").src="assets/images/human.gif";
        }, 1000*pop);
    }else{
        alert("Wrong input")
    }
    }
    feed(){
        if(this.calories < 500){
            document.getElementById("gif").src="assets/images/eating.gif";
            document.getElementById("stat-title").innerHTML = "Nom nom nom..";
            setTimeout(function(){
                document.getElementById("stat-title").innerHTML = "";
                document.getElementById("gif").src="assets/images/human.gif";
            }, 10000);
            this.calories += 200;
            document.getElementById("stat-title").innerHTML = "Nom nom nom..";
            setTimeout(() => {
            document.getElementById("cal").innerHTML = this.calories;
            if(this.calories < 500)
            document.getElementById("stat-title").innerHTML = "I'm still hungry";
            }, 10000);
        }else{
            document.getElementById("stat-title").innerHTML = "I'm not hungry.";
            setTimeout(function(){
                document.getElementById("stat-title").innerHTML = "Human";
            }, 5000);
        }

    }
}

class Superhero extends Human{
    Turn(){
        document.getElementById("gif").src="assets/images/transf.gif";
        document.getElementById("stat-title").innerHTML = "Here We Go Again!";
        setTimeout(function(){
            document.getElementById("stat-title").innerHTML = "Hulk";
            document.getElementById("gif").src="assets/images/hulk.gif";
        }, 2000)
    }
    fly(){
        document.getElementById("gif").src="assets/images/flying.gif";
        document.getElementById("stat-title").innerHTML = "I'm flying!";
        setTimeout(function(){
            document.getElementById("stat-title").innerHTML = "Hulk";
            document.getElementById("gif").src="assets/images/hulk.gif";
        }, 9000);
    }
    fightWithEvil(){
        ////
        document.getElementById("gif").src="assets/images/fighting.gif";
        ////
        document.getElementById("stat-title").innerHTML = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
        setTimeout(function(){
            document.getElementById("stat-title").innerHTML = "Hulk";
            document.getElementById("gif").src="assets/images/hulk.gif";
        }, 8000);
    }
}


let human = new Human({
    firstName : setFirstN(),
    lastName : setLastN(),
    gender : setGender(),
    age : setAge()
});

function setFirstN(){
    let firstN = document.getElementById("firstName");
    while(firstN.innerText === "" || firstN.innerText === null){
        firstN.innerText = prompt("Enter name", "Mark");
        if(!/^[a-zA-Z]+$/.test(firstN.innerText)){
            alert("Wrong input! Try again")
            firstN.innerText = null;
        }
    }
    return firstN.innerText;
}
function setLastN(){
    let lastN = document.getElementById("lastName");
    while(lastN.innerText === "" || lastN.innerText === null){
        lastN.innerText = prompt("Enter Last Name: ", "Ruffalo");
        if(!/^[a-zA-Z]+$/.test(lastN.innerText)){
            alert("Wrong input! Try again")
            lastN.innerText = null;
        }
    }
    return lastN.innerText;
}

function setGender(){
    let gender = document.getElementById("gender");
    while(gender.innerText === "" || gender.innerText === null){
        gender.innerText = prompt("Enter the gender (male or female)", "male");
        if(!gender.innerText === "male" || !gender.innerText === "female"){
            alert("Invalid Gender input! Try again")
            gender.innerText = null;
        }
    }
    return gender.innerText;
}


function setAge(){
    let age = document.getElementById("age");
    while(age.innerText === "" || age.innerText === null){
        age.innerText = prompt("Enter the age : ", "38");
        if(!/^[0-9]+$/.test(age.innerText)){
            alert("Wrong age input! Try again")
            age.innerText = null;
        }
    }
    return age.innerText;
}




human.calories = 900;
document.getElementById("cal").innerHTML = human.calories;
setInterval(function(){
    if(human.calories===0){
        document.getElementById("stat-title").innerHTML = "I'm hungry";
    }
}, 5000);

setInterval(function(){
    if(human.calories > 0){
        human.calories -=  200;
        document.getElementById("cal").innerHTML = human.calories; 
    }
}, 60000);



let superhero = new Superhero();
