const events = [
    {
        name: "Music Festival",
        date: "2026-12-15",
        seats: 50
    },
    {
        name: "Tech Workshop",
        date: "2025-01-10",
        seats: 20
    },
    {
        name: "Art Exhibition",
        date: "2026-08-20",
        seats: 0
    }
];

const today = new Date();
let output = "";

try {
    for (let i = 0; i < events.length; i++) {

        let eventDate = new Date(events[i].date);

        if (eventDate > today && events[i].seats > 0) {
            output += `
                <h3>${events[i].name}</h3>
                <p>Date: ${events[i].date}</p>
                <p>Available Seats: ${events[i].seats}</p>
                <hr>
            `;
        } else {
            output += `
                <p>${events[i].name} is not available for registration.</p>
            `;
        }
    }

    document.getElementById("events").innerHTML = output;

} catch (error) {
    document.getElementById("events").innerHTML =
        "Error: " + error.message;
}