console.log('I am linked now!');

var name = 'Mohamad';
alert('Mohamad');

let age = '26'
console.log(age);
const lastname = 'Safa'
console.log(lastname);
var DOB = '01/09/1996';
console.log(DOB);

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
