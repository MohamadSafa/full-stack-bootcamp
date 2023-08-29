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
fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log("error", error);
    })