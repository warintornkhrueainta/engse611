// Selecting the button element
let button = document.getElementById("addElementButton");

// Adding an event listener to the button
button.addEventListener("click", function() {
    // Creating a new paragraph element
    let newParagraph = document.createElement("p");
    
    // Setting the text content of the new paragraph
    newParagraph.textContent = "This is a new paragraph.";
    
    // Selecting the parent element
    let parentDiv = document.getElementById("parent");
    
    // Appending the new paragraph to the parent div
    parentDiv.appendChild(newParagraph);
});