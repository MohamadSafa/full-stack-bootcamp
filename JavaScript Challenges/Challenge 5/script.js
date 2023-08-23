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

//Step 2 : Event Handling
    //Multiple Event Listeners
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener ('mouseover', () => {
    colorButton.style.backgroundColor = 'green';
    colorButton.style.color = 'white';
});
colorButton.addEventListener('mouseout', () => {
    colorButton.style.backgroundColor = ''; // Revert back to the default background color
    colorButton.style.color = ''; // Revert back to the default text color
  });

    //Event Delegation
const originalDiv = document.getElementById('original');
originalDiv.addEventListener('click', (event) => {
  if (event.target.tagName === 'button') {
    console.log("Clicked button:", event.target.textContent);
  }
});

    //Form Data Extraction
    document.addEventListener('DOMContentLoaded', function () {
        const formContainer = document.getElementById('formContainer');
      
        const form = document.createElement('form');
        form.id = 'myForm';
      
        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Name:';
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = 'name';
        nameInput.name = 'name';
        nameInput.required = true;
      
        const emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.id = 'email';
        emailInput.name = 'email';
        emailInput.required = true;
      
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';
      
        form.appendChild(nameLabel);
        form.appendChild(nameInput);
        form.appendChild(document.createElement('br'));
        form.appendChild(emailLabel);
        form.appendChild(emailInput);
        form.appendChild(document.createElement('br'));
        form.appendChild(submitButton);
      
        formContainer.appendChild(form);
      
        form.addEventListener('submit', (event) => {
          event.preventDefault();
      
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
      
          console.log('Name:', name);
          console.log('Email:', email);
        });
      });
//Step 3 : Advanced DOM Manipulations
      //Dom Cloning
      document.addEventListener('DOMContentLoaded', function () {
        const originalDiv = document.getElementById('original');
        const cloneButton = document.getElementById('clone-btn');
        let clonedDiv = null;
        let isClonedVisible = false;
      
        cloneButton.addEventListener('click', function () {
          if (!clonedDiv) {
            clonedDiv = originalDiv.cloneNode(true);
            clonedDiv.querySelector('h1')
            textContent = 'Cloned';
            document.body.appendChild(clonedDiv);
          }
      
          if (isClonedVisible) {
            clonedDiv.style.display = 'none';
          } else {
            clonedDiv.style.display = 'block';
          }
      
          isClonedVisible = !isClonedVisible;
        });
      });

      //Element Removal
      document.addEventListener('DOMContentLoaded', function () {
        const removeHeaderButton = document.getElementById('remove-header-btn');
        
        removeHeaderButton.addEventListener ('click', function () {
          const header = document.querySelector('header');
          if (header) {
            header.remove();
          }
        });
      });

      //Inserting Elements
      function insertBeforeFooter(newElement) {
        const footer = document.querySelector('footer');
        if (footer) {
          footer.parentNode.insertBefore(newElement, footer);
        }
      }
      
      document.addEventListener('DOMContentLoaded', function () {
        const insertElementButton = document.getElementById('insert-element-btn');
      
        insertElementButton.addEventListener('click', function () {
          const newParagraph = document.createElement('p');
          newParagraph.textContent = 'This is the newly inserted element.';
          insertBeforeFooter(newParagraph);
        });
      });
      
      
      
      
      
            
      
      
      
      