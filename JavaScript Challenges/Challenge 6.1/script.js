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
        let response1 = await fetch ("https://uselessfacts.jsph.pl/random.json?language=en");
        let data1  = await response1.json();
        console.log(data1.text) // Here text will show in the console not the file with details because of .text
    } catch (error) {
        console.error("error", error);
    }};
fetchData();

//Step 4: Fetch Multiple Dog Images 
const urls = [
    "https://dog.ceo/api/breeds/image/random",
    "https://dog.ceo/api/breeds/image/random",
    "https://dog.ceo/api/breeds/image/random"
];
const fetchImage = async (url) => {
    const response = await fetch(url);
    const data2 = await response.json();
    return data2.message;
};
const fetchImagesFromUrls = async (urls) => {
    try {
        const imagePromises = urls.map(url => fetchImage(url));
        const images = await Promise.all(imagePromises);
        console.log(images);
    } catch (error) {
        console.log("error", error);
    }
    };
fetchImagesFromUrls(urls);