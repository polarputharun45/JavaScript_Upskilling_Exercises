const output = document.getElementById("output");

function loadEvents() {

    output.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(response => response.json())

        .then(data => {
            output.innerHTML =
                "Data Loaded Successfully";
            console.log(data);
        })

        .catch(error => {
            output.innerHTML =
                "Error Loading Data";
            console.log(error);
        });
}

// Async/Await Version
async function getEvents() {

    try {
        output.innerHTML = "Loading...";

        const response =
            await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        console.log(data);

        output.innerHTML =
            "Data Loaded Using Async/Await";

    } catch (error) {
        output.innerHTML = "Error";
    }
}