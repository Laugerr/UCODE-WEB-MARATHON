var animalName;
var gender;
var age;


// -------------------------------------Animal Name Requirement-----------------------------------------------

animalName = prompt("What animal is the superhero most similar to?");
if (animalName.length <= 20 && !animalName.includes(" ") && animalName !== "") {
    gender = prompt("Is the superhero male or female? Leave blank if unknown or other");

// -------------------------------------Gender Requirement----------------------------------------------------

    if (gender === "male" || gender === "female" || gender === "") {
        age = prompt("How old is the superhero");

// -------------------------------------Age Requirement-------------------------------------------------------

        if (age > 0 && age <= 1000){
            if (gender.match(/male/g) && age < 18){
                status = "boy";
            }
            if (gender.match(/male/g) && age >= 18) {
                status = "man";
            }
            if (gender.match(/female/g) && age < 18){
                status = "girl";
            }
            if (gender.match(/female/g) && age >= 18) {
                status = "woman";
            }
            if(gender === "" && age < 18){
                status = "kid";
            }
            if (gender === "" && age > 18){
                status = "hero";
            }   
            
            alert('The superhero name is: ' + animalName + '-' + status);

        }

        else {
            alert("Wrong input! Try to input valid requirements again.")
        }
    }
    else {
        alert("Wrong input! Try to input valid requirements again..")
    }
} 

else {
    alert("Wrong input! Try to input valid requirements again.")
}
