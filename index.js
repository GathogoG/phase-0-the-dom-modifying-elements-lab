//index.js
// This line uses document.querySelector to find the <main> element with the id main. 
//It then calls the remove() method on this element to remove it from the DOM.
document.querySelector('main#main').remove();

//This line creates a new <h1> element using the document.createElement() method and assigns
// _it to the variable newHeader. This element will be used to replace the removed <main> element
const newHeader = document.createElement('h1');

// This line sets the id attribute of the newly created <h1> element to 'victory'. 
//This is in accordance with the test requirement that the new header should have an id of 'victory'.
newHeader.id = 'victory';

// This line sets the text content of the <h1> element to 'YOUR-NAME is the champion'. It's important to note that 'YOUR-NAME' 
// _should be replaced with your actual name, as instructed in the comment.
newHeader.textContent = 'Gathogo is the champion'; // Replace YOUR-NAME with your actual name

// This line appends the newly created <h1> element (newHeader) to the <body> of the HTML document. 
//This ensures that the new header is added to the visible part of the webpage.
document.body.appendChild(newHeader);

