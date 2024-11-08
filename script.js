const resultsDiv = document.getElementById("results");
const descriptionDiv = document.getElementById("description");

// Create new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// When the request loads successfully
xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText); 
        resultsDiv.innerHTML = `<img src="${data.message}" alt="Random Dog Image" width="300">`; 
        showDescription(); 
    } else {
        resultsDiv.innerHTML = "Failed to load data."; 
    }
};

// Open GET request to the Dog CEO API
xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);

// Send request
xhr.send();

// API description
function showDescription() {
    descriptionDiv.innerHTML = `
        <h2>About the API</h2>
        <p>This API provides random images of various dog breeds.</p>
        <p>Source: <a href="https://dog.ceo/dog-api/" target="_blank">Dog CEO’s Dog API</a></p>
        <p><strong>Parameters Used:</strong> None were required for this random image endpoint.</p>
        <h3>Potential Applications</h3>
        <ul>
            <li>Entertainment apps that show a random cute dog image daily.</li>
            <li>Educational apps about dog breeds that showcase breed images and facts.</li>
        </ul>
    `;
}

