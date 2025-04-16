function canDrive(age){
    console.log(`Your age is ${age}`);
    if(age>=18){
        a
        alert("You can drive!");
    }
    else if(age>4){
        location.href = 'https://www.google.com';
    }
    else if (age <=0 ) {
            console.error('Invalid negative input.');
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
