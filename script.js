const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const toggle = document.querySelector('.toggle');
// const dateEl = document.querySelector('.date');

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
});

function setTime() {
    const time = new Date();
    // const month = time.getMonth();
    // const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 24;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourRotation = hoursForClock * 30 + minutes * 0.5; // Calculate the rotation for the hour hand
    const minuteRotation = minutes * 6 + seconds * 0.1; // Calculate the rotation for the minute hand
    const secondRotation = seconds * 6; // Calculate the rotation for the second hand

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`; // Apply rotation to the hour hand
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`; // Apply rotation to the minute hand
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`; // Apply rotation to the second hand

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}`; // Display the current time
}

setInterval(setTime, 1000); // Update the clock every second
