// Selecting the button element
let button = document.getElementById("removeElementButton");

// Adding an event listener to the button
button.addEventListener("click", function() {
    // Selecting the paragraph element to be removed
    let paragraph = document.getElementById("example");
    
    // Removing the paragraph element directly
    paragraph.remove();

    // Alternatively, you could remove the paragraph via its parent
    // let parentDiv = document.getElementById("parent");
    // parentDiv.removeChild(paragraph);
});