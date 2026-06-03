function registerUser() {

    document.getElementById("output").innerHTML =
        "Sending Data...";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Tharun",
                event: "Music Festival"
            })
        })

        .then(response => response.json())

        .then(data => {
            document.getElementById("output").innerHTML =
                "Registration Successful";
            console.log(data);
        })

        .catch(error => {
            document.getElementById("output").innerHTML =
                "Registration Failed";
            console.log(error);
        });

    }, 2000);
}