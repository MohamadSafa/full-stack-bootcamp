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