function submitForm() {

    let name = "Tharun";
    let eventName = "Music Festival";

    console.log("Form Submission Started");

    debugger;

    console.log("Name:", name);
    console.log("Event:", eventName);

    let payload = {
        name,
        eventName
    };

    console.log("Payload:", payload);

    console.log("Form Submitted Successfully");
}