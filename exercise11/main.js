document.getElementById("registerForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = this.elements["name"].value;
    let email = this.elements["email"].value;
    let eventName = this.elements["event"].value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerHTML =
            " Name Required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML =
            " Email Required";
        valid = false;
    }

    if (valid) {
        document.getElementById("output").innerHTML =
            `Registered: ${name} for ${eventName}`;
    }
});