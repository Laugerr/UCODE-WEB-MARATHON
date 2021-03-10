function checkDivision(beginRange = 1, endRange = 100){
    for (let i = beginRange; i <= endRange; i++) {
        status="";
        if(i % 2 === 0){
            if(status === ""){
                status = " is even";
            }else{
                status += " , is even";
            }
        }
        if(i % 3 === 0){
            if(status === ""){
                status = " is a multiple of 3";
            }else{
                status += " ,is a multuple of 3";
            }
        }
        if(i % 10 === 0){
            if(status === ""){
                status = " is a multiple of 10";
            }else{
                status += ", is a multiple of 10";
            }
        }if(status === ""){
            status = "-";
        }
        console.log(i + " " + status);
    }
}

beginRange = prompt("Enter The begining Range: ");
endRange = prompt("Enter The endind Range: ");
if (beginRange === "" || endRange === ""){
    if(beginRange === "" && endRange !== ""){
        checkDivision(1, +endRange);
    }if(beginRange !== "" && endRange === ""){
        checkDivision(+beginRange, 100);
    }
    if(beginRange === "" && endRange === ""){
        checkDivision();
    }
}else if(beginRange !== "" && endRange !== ""){
    checkDivision(+beginRange, +endRange);
}