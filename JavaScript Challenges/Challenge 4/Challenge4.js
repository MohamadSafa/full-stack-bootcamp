//Step 1
    //Array Creation
let fiveNumbers = [10,20,30,40,50];
console.log(fiveNumbers);

    //Object Creation
const personalInfo = {
    name: "Mohamad",
    age: 26,
    height: "184 cm",
    location: "Salim Slem",
    nationality: "Lebanese",
}
console.log(personalInfo);

//Step 2
    //New Array with Spread
let nextThreeNumbers = [11,22,33];
console.log(nextThreeNumbers);

const allNumbers = [...fiveNumbers,...nextThreeNumbers];
console.log(allNumbers);

    //New Object with Spread
const additionalInfo = {
    occupation: "Marketeer",
    hobby: "Fitness and Nutrition",
    education: "Marketing & Digital",
}
console.log(additionalInfo);

const fullInfo = {...personalInfo,...additionalInfo};
console.log(fullInfo);

//Step 3
    //Destructuring Arrays
const [firstNum,secondNum,thirdNumb] = fiveNumbers;
console.log(firstNum,secondNum,thirdNumb);

    //Destructuring Objects
const {name,age,height} = personalInfo;
console.log(name,age,height);


