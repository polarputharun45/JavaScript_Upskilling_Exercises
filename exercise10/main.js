function displayEvent(
    name = "Community Event",
    category = "General"
) {
    return `${name} - ${category}`;
}

const event = {
    name: "Music Festival",
    category: "Music",
    seats: 50
};

// Destructuring
const { name, category, seats } = event;

document.getElementById("output").innerHTML = `
    Event Name: ${name}<br>
    Category: ${category}<br>
    Seats: ${seats}<br><br>
    ${displayEvent()}
`;