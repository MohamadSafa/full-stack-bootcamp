//Step 1
    //Basic Function
function addNumbers(num1, num2) {
    return num1 + num2;
}
let result = addNumbers(4,6);
    console.log(result);

    //Function with Conditional Statements
function findMax (num3,num4) {
    if (num3 > num4){
        return num3;
}else if (num3 < num4){
        return num4;
}else {
    return "Both are equal"
}
}
console.log(findMax(20,10));
console.log(findMax(30,40));
console.log(findMax(5,5));

    //Nested Function
    function compute(num11, num22, operation) {
        function add() {
            return num11 + num22;
        }
    
        function subtract() {
            return num11 - num22;
        }
    
        function multiply() {
            return num11 * num22;
        }
    
        function divide() {
            if (num22 !== 0) {
                return num11 / num22;
            } else {
                return "Cannot divide by zero";
            }
        }
    
        switch (operation) {
            case "add":
                return add();
            case "subtract":
                return subtract();
            case "multiply":
                return multiply();
            case "divide":
                return divide();
            default:
                return "Invalid operation";
        }
    }
console.log(compute(10, 5, "add"));
console.log(compute(10, 5, "subtract"));
console.log(compute(10, 5, "multiply"));
console.log(compute(10, 5, "divide"));
console.log(compute(10, 0, "divide"));

//Step 2
    //Arrow Function
const squareNumber = (number) => number * number ;
console.log(squareNumber(5));
console.log(squareNumber(9));
console.log(squareNumber(10));

    //Understanding Scopes
const globalVar = 10;
const squareNumber1 = number => {
    console.log("Inside squareNumber function - globalVar:", globalVar);
    return number * number;
};
console.log("Outside squareNumber function - globalVar:", globalVar);
console.log(squareNumber1(7));

const localVar = 20;
const squareNumber2 = number => {
    return number * number;
};
console.log("Outside squareNumber function - localVar:", localVar);
console.log(squareNumber2(5));

//Step 3
//for loop
for (let i=0; i <= 10; i++) {
    console.log(i);
}

//while loop
    let i = 10;

    while (i >= 1) {
        console.log(i);
        i--;
    }
    
//do-while loop
let i1 = 1;
do {
    if (i1 % 2 === 0) {
        console.log(i1);
    }
    i1++;
}while (i1 <= 10);

//advanced loop challenge
const favoriteFruits = ["banana", "apple", "strawberry", "kiwi", "watermelon", "blueberry", "mango"];

for (const fruit of favoriteFruits) {
    if (fruit.length > 5) {
        console.log(fruit);
    }
}