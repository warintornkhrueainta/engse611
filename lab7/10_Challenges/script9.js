// Selecting the data container element
let dataContainer = document.getElementById("dataContainer");

// Fetching data and updating the DOM
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            // Creating a new paragraph element for each post
            let postElement = document.createElement("p");
            postElement.textContent = post.title;
            
            // Appending the new element to the data container
            dataContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });