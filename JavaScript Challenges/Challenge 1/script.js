//Step 1
console.log('I am linked now!');

//Step 2
var name = 'Mohamad';
alert('Mohamad');

//Step 3
let age = '26'
console.log(age);
const lastname = 'Safa'
console.log(lastname);
var DOB = '01/09/1996';
console.log(DOB);

//Step 4
const string = "This is a text"
console.log(string) + "used for Strings";
let boolean1 = true;
console.log(boolean1);
let boolean2 = false;
console.log(boolean2) + "used for Booleans";
let number = 1215;
console.log(number) + "used for numbers, without brackets, number displayed in different color";
const Number = "999";
console.log(Number) + "used for numbers, with brackets, numbers displayed as String color"; 
const person = {firstname: "Mohamad", lastname: "Safa"};
console.log(person) + "used for objects";
const Array1 = ["Red", "Blue", "Yellow", "Green"];
console.log(Array1) + "used for array";
let num1 = null;
console.log(null) + "used for null display"; 
let num2;
console.log(num2) + "used for undefined value, when we don't put an equal";

//Step 5
let myText = "Hello! How are you?"
const counter = 3;
console.log(counter);
const backtick = `This is my text using backticks ${counter} times`;
console.log(backtick + " - Backtick is used so the console can display the number counter above which is 3");
const singleQuote =
  'This is my text using single quotations ${counter} times';
console.log(singleQuote + " - Singlequote will show error in the console in case there's apostrophes in the text above but it will not show the counter number");
const doubleQuote =
  "This is my text using double quotations ${counter} times";
console.log(doubleQuote + " - Doublequote will make sure the text input will be displayed even if there is apostrophe in the text but it will not show the counter number");
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;
console.log(tryThisAlso + " - In this case, even with an apostrophe in the paragraph, the input is shown correct in the console and the right number is displayed because we used the Backtick");

//Step 6
let name1 = "John";
console.log(name1);
let surname1 = "Doe";
console.log(surname1);
var result = (name1 + surname1);
console.log(result);

//Step 7
var array2 = ['Chocolate', 'Candy', 'Strawberry', 'Banana', 'Apple', 'Juice', 'Coconut']
console.log(array2);
var numb = 5
console.log(numb);
let result1 = (array2 === numb)
console.log(result1); + " - These symbols means that the first is equal to the other and perform strict equality to the whole script, there's no room for coercion "
let result2 = (array2 !== numb) 
console.log(result2); + " - These symbols means that the first is not equal to the other"
let result3 = (array2 == numb)
console.log(result3); + " - These symbols means that the firsl is equal to the other but doesn't take the whole value sometimes, there's room for coercion"
let result4 = (array2 != numb)
console.log(result4); + " - These symbols means that the first is not equal to the other and also doesn't take the whole input value sometimes, there's room for coercion"

var a = [8];
let result5 = (a > numb)
console.log(result5);
let result6 = (a >= numb) 
console.log(result6);
let result7 = (a < numb)
console.log(result7); 
let result8 = (a <= numb)
console.log(result8);

//Step 8
var result0 = 5+3*2; + " - It will show no answer whitout the logging"
console.log(result0);
var result_1 = 10/2+3;
console.log(result_1);
var result_2 = 10/(2+3);
console.log(result_2); + " - The difference between result1 and result2 is the simple basics of mathematics, parathanses force priority on the equation"
