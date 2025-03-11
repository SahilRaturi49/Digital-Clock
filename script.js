function updateClock(){
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2,"0");
    let seconds = now.getSeconds().toString().padStart(2,"0");
    let ampm = now.getHours() >= 12 ? "PM" : "AM";

    timeElement.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

    const options = {
        weekday: "short",
        month: "long",
        day : "numeric",
        year : "numeric",
    };

    let date = now.toLocaleDateString(undefined, options);
    dateElement.innerText = `${date}`;
}

setInterval(updateClock, 1000);



updateClock();