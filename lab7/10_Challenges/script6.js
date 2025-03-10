// Selecting the button element
let button = document.getElementById("exampleButton");

// Adding an event listener to the button
button.addEventListener("click", function() {
    // Selecting the paragraph element
    let message = document.getElementById("message");
    
    // Changing the text content of the paragraph
    message.textContent = "Button was clicked!";
});