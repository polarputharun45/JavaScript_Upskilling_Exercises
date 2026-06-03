const eventName = "Community Music Fest";
const eventDate = "15-Aug-2026";
let availableSeats = 50;

// Display event details
document.getElementById("eventInfo").innerHTML =
    `Event Name: ${eventName}<br>
     Event Date: ${eventDate}<br>
     Available Seats: ${availableSeats}`;

// Registration
availableSeats--;

document.getElementById("registration").innerHTML =
    `After Registration, Available Seats: ${availableSeats}`;

// Cancellation
availableSeats++;

document.getElementById("cancellation").innerHTML =
    `After Cancellation, Available Seats: ${availableSeats}`;