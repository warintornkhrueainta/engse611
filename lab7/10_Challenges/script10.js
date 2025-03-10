    // Selecting the element to animate and the button to trigger the animation
let element = document.getElementById("animateMe");
let button = document.getElementById("animateButton");

// Defining the function to trigger the transition
function triggerAnimation() {
    element.style.width = "200px";
    element.style.height = "200px";
    element.style.backgroundColor = "red";
}

// Adding an event listener to the button to trigger the transition on click
button.addEventListener("click", triggerAnimation);

// Defining and starting a simple animation
let position = 0;
function animate() {
    if (position < 350) {
        position++;
        element.style.left = position + "px";
    } else {
        clearInterval(interval);
    }
}

// Starting the animation using setInterval
let interval = setInterval(animate, 10);