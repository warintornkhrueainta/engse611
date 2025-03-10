document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        if (link.href !== "http://google.com/") {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default navigation
                alert(this.textContent); // Show alert with the link text
            });
        }
    });
});
