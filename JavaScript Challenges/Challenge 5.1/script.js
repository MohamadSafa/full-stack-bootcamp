//Step 1 
const button = document.createElement("button");

button.textContent = "Click me";

button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#3498db";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.cursor = "pointer";

document.body.appendChild(button);

button.addEventListener ("click", function () {
    button.style.backgroundColor = "red";
    button.style.color = "white";
});

const randomNumber = Math.floor(Math.random() * 1000) + 1;

    // Update the button text content
    button.textContent = `Clicked ${randomNumber}`;

//Step 2
const h1 = document.createElement("h1");
h1.textContent = "Hello, World!";

// Apply border properties
h1.style.border = "10px dotted green";

// Add the h1 element to the body of the page
document.body.appendChild(h1);

// Add keydown event listener
document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    // Change background color to red
    h1.style.backgroundColor = "red";
  } else if (event.key === "s" || event.key === "S") {
    // Move h1 element 10 pixels to the right
    const currentLeft = parseFloat(h1.style.left) || 0;
    h1.style.left = currentLeft + 10 + "px";
  } else if (event.key === "d" || event.key === "D") {
    // Append a new paragraph with text "Key D was pressed!"
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Key D was pressed!";
    document.body.appendChild(newParagraph);
  } else if (event.key === "w" || event.key === "W") {
    // Toggle visibility of the h1 element
    h1.style.display = h1.style.display === "none" ? "block" : "none";
  } else if (event.key === " ") {
    // Enlarge the font size of h1 element's text
    const currentFontSize = parseFloat(getComputedStyle(h1).fontSize);
    h1.style.fontSize = (currentFontSize + 2) + "px";
  }
});








