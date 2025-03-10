// Selecting the element with the id "example"
let element = document.getElementById("example");

// Accessing the parent element
let parent = element.parentNode;
console.log("Parent element:", parent);
// This will log the entire <div id="parent"> element and its content, including the two <p> elements it contains.


// Accessing the child elements of the parent
let children = parent.children;
console.log("Child elements:", children);
// This will log an HTMLCollection containing the two <p> elements that are children of the <div id="parent">.


// Accessing the next sibling element
let nextSibling = element.nextElementSibling;
console.log("Next sibling element:", nextSibling);
// This will log the next <p> element, which is <p>This is the next paragraph.</p>.