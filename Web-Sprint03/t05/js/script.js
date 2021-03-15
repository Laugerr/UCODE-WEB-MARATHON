function forGuestlIST(){
    var guestList = new WeakSet();
    let arr = [
     guest1 ={
        guestName:'Salah'
    },
     guest2 = {
        guestName: 'Ayoub'
    },
     guest3 = {
        guestName: 'Mehdi'
    },
     guest4 = {
        guestName: 'Staif'
    },
     guest5 = {
        guestName: 'Qahba'
    },
     guest6 = {
        guestName: 'Tolu'
    },
     guest7 = {
     guestName: 'Malewa'
    
    }];
   guestList.add(guest1);
   guestList.add(guest2);
   guestList.add(guest3);
   guestList.add(guest4);
   guestList.add(guest5);
   guestList.add(guest6);
   guestList.add(guest7);

    var choise = prompt("1. To Check Your guestName in Guest's list\n2. To Check Who Are Invited\n3. To Check How Many People Are Invited\n4. To Remove Some One From The List");
    var b = false;
    if(choise === "1"){
        var userguestName = prompt("Enter your guestName: ");
        for(let i =0; i< arr.length; i++){
            if(arr[i].guestName === userguestName && guestList.has(arr[i])){
                alert("Your guestName Is In The List\nYou're invited!");
                console.log("Your guestName Is In The List\nYou're invited!");
                b = true;
            }

        }
        if(!b){
            alert(userguestName + " is Not Amoung The List.");
            console.log(userguestName + " is Not Amoung The List.");
        }
    }
    if(choise === "2" || choise ==="3"){
        alert("Sorry You Not a Guest To See How Many People Are Invited");
        console.log("Sorry You Not a Guest To See How Many People Are Invited");
    }
    if(choise === "4"){
        var user_to_delete = prompt("Enter guestName To Remove: ");
        b = false;
        for(let i =0; i< arr.length; i++){
            if(arr[i].guestName === user_to_delete && guestList.has(arr[i])){
                guestList.delete(arr[i]);
                alert( user_to_delete + " Removed Successfully!");
                console.log( user_to_delete + " Removed Successfully!")
            }
        }
        if(!b){
            alert(user_to_delete + " is Not In The List.");
            console.log(user_to_delete + " is Not In The List.")
        }
    }
}
/////////////////// --Map-- ///////////////////////
    let menu = new Map();
    menu.set("Butter Chiken Rice", 336);
    menu.set("Chicken Briyani", 364);
    menu.set("Antipasto Salad", 200);
    menu.set("Beef Burger", 180);
    menu.set("Beef Meal Steak", 250);
    menu.set("Plain Rice", 150);
    menu.set("Chicken Grilled", 210);
/////////////////// --Set--  ///////////////////////
    let bankBalance = new Set();
    const client1 = {
        guestName: 'Salah',
        gender: 'Male',
        age: 23,
        cridential: 4521367895102345
    }
    const client2 = {
        guestName: 'Ayoub',
        gender: 'Male',
        age: 50,
        cridential: 8501236547892012,
    }
    const client3 = {
        guestName:'Qahba',
        gender: 'Female',
        age: 25,
        cridential: 5201236974580001
    }
    const client4 = {
        guestName: 'Staif',
        gender: 'Male',
        age: 22,
        cridential: 5478410321054789
    }
    const client5 = {
        guestName: 'Malewa',
        gender: 'Female',
        age: 18,
        cridential: 5448012369874520
    }
    bankBalance.add(client1);
    bankBalance.add(client2);
    bankBalance.add(client3);
    bankBalance.add(client4);
    bankBalance.add(client5);
/////////////////// --WeakMap-- ///////////////////////
function forWeakMap(){
    let coinCollection = new WeakMap();
    const coin1 = {
        cost: 8,
        yearOfRelease: 1880
    }
    const coin2 = {
        cost: 20,
        yearOfRelease: 1750
    }
    const coin3 = {
        cost: 15,
        yearOfRelease: 1920
    }
    const coin4 = {
        cost: 5,
        yearOfRelease: 1630
    }
    const coin5 = {
        cost: 26,
        yearOfRelease: 1850
    }
    coinCollection.set(coin1, "Penny");
    coinCollection.set(coin2, "Sovereign");
    coinCollection.set(coin3, "Guinea");
    coinCollection.set(coin4, "Ryal");
    coinCollection.set(coin5, "Unite");
    alert( coinCollection.get(coin1) + " Coin" + " :\n" + " -Cost: " +coin1.cost + "\n -Year of release: " + coin1.yearOfRelease + "\n" + 
          coinCollection.get(coin2) + " Coin" + " :\n" + " -Cost: " +coin2.cost + "\n -Year of release: " + coin2.yearOfRelease + "\n" +
          coinCollection.get(coin3) + " Coin" + " :\n" + " -Cost: " +coin3.cost + "\n -Year of release: " + coin3.yearOfRelease + "\n" +
          coinCollection.get(coin4) + " Coin" + " :\n" + " -Cost: " +coin4.cost + "\n -Year of release: " + coin4.yearOfRelease + "\n" +
          coinCollection.get(coin5) + " Coin" + " :\n" + " -Cost: " +coin5.cost + "\n -Year of release: " + coin5.yearOfRelease + "\n" );
    console.log(coinCollection.get(coin1) + " Coin" + " :\n" + " -Cost: " +coin1.cost + "\n -Year of release: " + coin1.yearOfRelease + "\n" + 
                coinCollection.get(coin2) + " Coin" + " :\n" + " -Cost: " +coin2.cost + "\n -Year of release: " + coin2.yearOfRelease + "\n" +
                coinCollection.get(coin3) + " Coin" + " :\n" + " -Cost: " +coin3.cost + "\n -Year of release: " + coin3.yearOfRelease + "\n" +
                coinCollection.get(coin4) + " Coin" + " :\n" + " -Cost: " +coin4.cost + "\n -Year of release: " + coin4.yearOfRelease + "\n" +
                coinCollection.get(coin5) + " Coin" + " :\n" + " -Cost: " +coin5.cost + "\n -Year of release: " + coin5.yearOfRelease + "\n" )
}
//////////////////////////////////////////

function forMenu(menu){
    var dish = prompt("Type Dish Prefered : \nCheck The Menu of Dishes type 'all'");
    dish = dish.trim();
    if(dish === "all"){
        let items = "";
        for(const m of menu){
            items +=  m + "  MAD\n"//itmes.concat(m + " MAD\n");
        }
        alert(items);
        console.log(items)
    }else if(menu.has(dish)){
        alert(dish + ", " + menu.get(dish) + " MAD");
        console.log(dish + ", " + menu.get(dish) + " MAD");
    }
}

function forSet(bankBalance){
    var cr = prompt("Type Your Credential Number: ");
    for(const c of bankBalance){
        if(c.cridential === +cr){
            alert("Client:\nguestName : " + c.guestName + "\nGender : "+ c.gender + "\nAge : " + c.age);
            console.log("Client:\nguestName : " + c.guestName + "\nGender : "+ c.gender + "\nAge : " + c.age)
        }
    }
}

var firstP = prompt("1. To check the Guests list\n2. To Check The Menu\n3. To Check Bank Account\n4. To See a Coin Collection");
if(firstP === "1"){
    forGuestlIST();
}
if(firstP === "2"){
   forMenu(menu);
}
if(firstP === "3"){
    forSet(bankBalance);
}
if(firstP === "4"){
    forWeakMap();
}