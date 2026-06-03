// Event Class
class Event {
    constructor(name, seats) {
        this.name = name;
        this.seats = seats;
    }
}

// Prototype Method
Event.prototype.checkAvailability = function () {
    if (this.seats > 0) {
        return "Seats Available";
    } else {
        return "Event Full";
    }
};

const event1 = new Event("Music Festival", 50);

// Display Object Keys and Values
let result = "";

for (let [key, value] of Object.entries(event1)) {
    result += `${key}: ${value}<br>`;
}

result += `<br>Status: ${event1.checkAvailability()}`;

document.body.innerHTML += result;