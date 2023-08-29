//Step 1: Simple Delay
function Delay(millieseconds) {
    const delayPromise = new Promise ((resolve) => {
        setTimeout (() => {
            resolve ("Hello!")
        }, millieseconds)
    })
    return delayPromise
}

Delay(5000)
    .then((message) => {
        console.log(message)
    });

//Step 2: Fetch a Random Fact
fetch("https://uselessfacts.jsph.pl/random.json?language=en") //Fetch always come with the chain of then and catch below
    .then(response => response.json())
    .then(response => {
        console.log(response) //response.text will get the text from json only without showing the details in the console log
    })
    .catch(error => {
        console.log("error", error);
    })

//Step 3 : Rewrite with Async/Await
async function fetchData(){
    try {
        const response1 = await fetch ("https://uselessfacts.jsph.pl/random.json?language=en")
        const data1  = await response1.json();
        console.log(data1);
    } catch (error) {
        console.log("error", error);
    }};