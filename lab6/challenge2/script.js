document.addEventListener("DOMContentLoaded", function () {
    // Select all paragraphs inside the div with id "main"
    let paragraphs = document.querySelectorAll("#main p");

    // Loop through the paragraphs to find the one that contains the text
    paragraphs.forEach(paragraph => {
        if (paragraph.textContent.includes("Llamas and Chickens!")) {
            paragraph.style.color = "red";
        }
    });
});
