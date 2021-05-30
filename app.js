let hours = 0;
let mins = 0;
let secs = 0;

let hoursElement = document.querySelector("#hours");
let minsElement = document.querySelector("#mins");
let secondElement = document.querySelector("#secs");

let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");

console.log(hours, mins, secs)
let timeStartId;

function start() {
    stopBtn.removeAttribute("disabled");
    startBtn.setAttribute("disabled", "true");
    console.log("Timer started");
    timeStartId = setInterval(() => {
        secs += 1;
        secondElement.innerHTML = secs;
        if (secs === 60) {
            secs = 0;
            mins += 1;
            minsElement.innerHTML = mins
            if (mins === 60) {
                mins = 0;
                hours += 1;
                hoursElement.innerHTML = hours
            }
        }
    }, 1000);

}

function reset() {
    resetBtn.setAttribute("disabled", "true");
    startBtn.removeAttribute("disabled");
    stopBtn.removeAttribute("disabled");
    console.log("Timer reset");
    hoursElement.innerHTML = "00";
    minsElement.innerHTML = "00";
    secondElement.innerHTML = "00";
    mins = 0;
    hours = 0;
    secs = 0;
    clearInterval(timeStartId);
}

function stop() {
    stopBtn.setAttribute("disabled", "true");
    resetBtn.removeAttribute("disabled");
    startBtn.removeAttribute("disabled");
    console.log("Timer stop");
    clearInterval(timeStartId);
    startBtn.removeAttribute("disabled");
}