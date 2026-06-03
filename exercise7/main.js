const events = [
    "Music Festival",
    "Tech Workshop",
    "Art Exhibition"
];

const eventList = document.querySelector("#eventList");

events.forEach(event => {
    const li = document.createElement("li");
    li.textContent = event;
    eventList.appendChild(li);
});

// Register Event
const registerEvent = document.createElement("li");
registerEvent.textContent = "Dance Show Registered";
eventList.appendChild(registerEvent);