document.addEventListener("DOMContentLoaded", function () {
    // Select all paragraphs inside the div with id "main"
    let paragraphs = document.querySelectorAll("#main p");

    // Loop through each paragraph and apply the styles
    paragraphs.forEach(paragraph => {
        paragraph.style.color = "red";      // Change text color to red
        paragraph.style.fontSize = "24px";  // Change font size to 24px
    });
});
