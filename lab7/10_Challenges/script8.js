// Selecting the input and form elements
let inputElement = document.getElementById("exampleInput");
let form = document.getElementById("exampleForm");

// Adding an event listener to handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    // Getting the value of the input element on form submission
    let inputValue = inputElement.value;
    
    // Displaying the input value in a paragraph element
    let output = document.getElementById("output");
    output.textContent = "Form submitted with input value: " + inputValue;
});