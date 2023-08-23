//Step 1 : Dom Creation and Navigation
    //Dom Tree Navigation
const menuDiv = document.querySelector('.menu');
const headerElement = document.querySelector('header');
const buttonsDiv = document.querySelector('.buttonContainer');
const ulDiv = document.querySelector('.ul');
const footerElement = document.querySelector('footer');
console.log(menuDiv,headerElement,buttonsDiv,ulDiv,footerElement);

menuDiv.childNodes.forEach(node => {
    if (node.nodeType === Node.ELEMENT_NODE) {
        console.log(node);
    }
});
    //Dom Element Creation
const containerDiv = document.createElement('div');
containerDiv.className = 'container';
const container = document.createElement('p');
container.textContent = "Hello, World!";
containerDiv.appendChild(container);
document.body.appendChild(containerDiv);

    //Element Styling
containerDiv.style.backgroundColor = 'blue';
container.style.color = 'white';
container.style.fontSize = '24px';
container.style.fontFamily = 'Helvetica';
container.style.border = 'solid 1px black';
const heading = document.querySelectorAll('h1,h3');
for (let i = 0; i < heading.length; i++) {
    heading[i].style.fontStyle = 'italic';
}

