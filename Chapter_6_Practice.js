function canDrive(age){
    console.log(`Your age is ${age}`);
    if(age>=18){
        alert("You can drive!");
    }
    else{
        alert("You are not eligible to drive.");
    }
}

do
{
    let age = prompt("Enter your age");
    canDrive(age);
}while(confirm("Whether you want to see prompt once again or not!"));
