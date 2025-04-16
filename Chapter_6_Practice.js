function canDrive(age){
    console.log(`Your age is ${age}`);
    if(age>=18){
        alert("You can drive!");
    }
    else{
        alert("You are not eligible to drive.");
    }
}

let age = prompt("Enter your age");
canDrive(age);