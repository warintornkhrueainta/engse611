
const navLinks = document.querySelectorAll("nav a");


navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    
    console.log("Clicked on:", link.textContent);
    alert("clicked!");
  });
});