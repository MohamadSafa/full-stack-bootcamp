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
console.log(compute(10, 5, "power"));


