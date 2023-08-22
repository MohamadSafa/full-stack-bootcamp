//Step 1 : Arrays and Objects
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

//Step 2 : Spread Operator
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

//Step 3 : Destructuring
    //Destructuring Arrays
const [firstNum,secondNum,thirdNumb] = fiveNumbers;
console.log(firstNum,secondNum,thirdNumb);

    //Destructuring Objects
const {name,age,height} = personalInfo;
console.log(name,age,height);

//Step 4 : Advanced Operations
    //Nested Destructuring
    const person = {
        name1: 'Mohamad',
        age1: 26,
        personalInfo: {
          contactInfo: {
            email: 'mohsafa3@gmail.com',
            phone: '03123456'
          }
        }
      };
      
      const { name1, age1, personalInfo: { contactInfo: { email, phone } } } = person;
      
      console.log(name1);
      console.log(age1);
      console.log(email); 
      console.log(phone);
    
      //Rest with Destructuring
      const [firstNum1,secondNum1,...restOfNumbers] = fiveNumbers;
      console.log(firstNum,secondNum,restOfNumbers);

      //Merging and Overwriting with Spread
      let fruits = ['Apple','Tomato','Banana','Cucumber'];
      let vegetables = ['Lettuce','Cucumber','Onion','Tomato'];
      const mergedObject = {...fruits,...vegetables};
      console.log(mergedObject); //- This will show the last input on the console only.
      
