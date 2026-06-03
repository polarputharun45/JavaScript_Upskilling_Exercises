// Array of events
let events = [
    {
        name: "Music Festival",
        category: "Music"
    },
    {
        name: "Tech Workshop",
        category: "Technology"
    },
    {
        name: "Art Exhibition",
        category: "Art"
    }
];

// Add new event using push()
events.push({
    name: "Dance Show",
    category: "Music"
});

// Filter only music events
let musicEvents = events.filter(
    event => event.category === "Music"
);

// Display output
let result = "<h2>All Events</h2>";

events.forEach(event => {
    result += `
        Name: ${event.name}<br>
        Category: ${event.category}<br><br>
    `;
});

result += "<h2>Music Events</h2>";

musicEvents.forEach(event => {
    result += `
        Name: ${event.name}<br>
        Category: ${event.category}<br><br>
    `;
});

document.getElementById("output").innerHTML = result;