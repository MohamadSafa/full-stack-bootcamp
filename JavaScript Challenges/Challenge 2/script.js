console.log("Hello World!");

//Step 1
var age = '26'
console.log(age);
if (age >= 26) {
    console.log("You can enter this room.");
} else {
    console.log("You can't enter this room.");
}
const expression1 = 5 > 3;
console.log(expression1);
const expression2 = 10 === '10';
console.log(expression2);
const expression3 = true && false;
console.log(expression3);
const expression4 = !expression3;
console.log(expression4);

//Step 2
const age1 = 25;
const hasDriverLicense = true;
const hasCar = false;

let canDrive = false;
if (age1 >= 18 && hasDriverLicense){
    console.log(canDrive = true);
}else{
    console.log(canDrive);
}

let canRentCar = false;
if (age1 >= 22 && hasDriverLicense && !hasCar){
    console.log(canRentCar = true);
}else{
    console.log(canDrive);
}

let needDriver = false;
if (age1 < 18 && !hasDriverLicense && !hasCar){
    console.log(!needDriver)
}else{
    console.log(needDriver)
}