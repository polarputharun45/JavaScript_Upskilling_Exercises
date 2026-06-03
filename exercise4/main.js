let events = [];

// Function to add an event
function addEvent(name, category) {
    events.push({
        name: name,
        category: category
    });
}

// Function to register a user
function registerUser(userName, eventName) {
    return `${userName} registered for ${eventName}`;
}

// Function to filter events by category
function filterEventsByCategory(category) {
    return events.filter(event => event.category === category);
}

// Closure to track registrations
function registrationTracker(category) {
    let totalRegistrations = 0;

    return function () {
        totalRegistrations++;
        return `${category} Registrations: ${totalRegistrations}`;
    };
}

// Higher-Order Function
function searchEvents(callback) {
    return events.filter(callback);
}

// Add Events
addEvent("Music Festival", "Music");
addEvent("Tech Workshop", "Technology");
addEvent("Dance Show", "Music");

// Register User
let registration = registerUser("Tharun", "Music Festival");

// Closure Example
const musicCounter = registrationTracker("Music");

let count1 = musicCounter();
let count2 = musicCounter();

// Callback Example
let musicEvents = searchEvents(
    event => event.category === "Music"
);

document.getElementById("output").innerHTML = `
<h3>${registration}</h3>
<p>${count1}</p>
<p>${count2}</p>

<h3>Music Events</h3>
<pre>${JSON.stringify(musicEvents, null, 2)}</pre>
`;