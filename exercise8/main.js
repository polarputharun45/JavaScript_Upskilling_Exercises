function register() {
    document.getElementById("output").innerHTML =
        "Registration Successful";
}

function filterCategory() {
    const category =
        document.getElementById("category").value;

    document.getElementById("output").innerHTML =
        "Selected Category: " + category;
}

document.getElementById("search")
.addEventListener("keydown", function (event) {
    document.getElementById("output").innerHTML =
        "Searching: " + event.target.value;
});