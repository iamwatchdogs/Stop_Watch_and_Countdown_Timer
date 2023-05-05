// Toggling Between Stopwatch and CountDown-Timer.
const toggle = document.querySelector('.toggle');
const stopwatch = document.getElementById('stopwatch');
const countdown = document.getElementById('countdown');
let isVisible = 'stopwatch';

toggle.addEventListener('click', function() {
    if (stopwatch.style.display === 'none') {
        stopwatch.style.display = 'block';
        countdown.style.display = 'none';
        toggle.textContent = 'Stop Watch';
        isVisible = 'stopwatch';
    } else {
        stopwatch.style.display = 'none';
        countdown.style.display = 'block';
        toggle.textContent = 'Count Down Timer';
        isVisible = 'countdown';
    }
});

// Main logic for Stopwatch and CountDown-Timer.

// Declaring Global variables.
let elapsedTime = 0;
let timerIntervalId;

// Write into `stopwatch`
function writeStopwatch(hours, mins, sec, ms) {
    document.getElementById('stopwatch-hours').innerHTML = hours;
    document.getElementById('stopwatch-mins').innerHTML = mins;
    document.getElementById('stopwatch-sec').innerHTML = sec;
    document.getElementById('stopwatch-ms').innerHTML = ms;
}

// Write into `countdown`
function writeCountDown(hours, mins, sec, ms) {
    document.getElementById('cdtimer-hours').innerHTML = hours;
    document.getElementById('cdtimer-mins').innerHTML = mins;
    document.getElementById('cdtimer-sec').innerHTML = sec;
    document.getElementById('cdtimer-ms').innerHTML = ms;
}

// Function to pause the timer.
function pauseTimer() {
    clearInterval(timerIntervalId);
    hasBegun = false;
}

// Function to start the timer.
function startTimer() {

    // Starting time in milliseconds.
    let startTime = Date.now() - elapsedTime;

    timerIntervalId = setInterval(function() {

        // Calculating elapsed time in milliseconds.
        elapsedTime = Date.now() - startTime;

        // Calculating the hours, minutes and seconds from timer.
        let diffInHrs = elapsedTime / 3600000;
        let hour = Math.floor(diffInHrs);

        let diffInMin = (diffInHrs - hour) * 60;
        let minute = Math.floor(diffInMin);

        let diffInSec = (diffInMin - minute) * 60;
        let second = Math.floor(diffInSec);

        let diffInMs = (diffInSec - second) * 100;
        let milliSecond = Math.floor(diffInMs);

        // Padding 0 before single digit number.
        hour = hour.toString().padEnd(2, '0');
        minute = minute.toString().padStart(2, '0');
        second = second.toString().padStart(2, '0');
        milliSecond = milliSecond.toString().padStart(2, '0');

        // Displaying the timer in the HTMl document.
        if (isVisible == 'stopwatch') {
            writeStopwatch(hour, minute, second, milliSecond);
        } else {
            writeCountDown(hour, minute, second, milliSecond);
        }
    }, 10);
}

function resetTimer() {

    // pausing the timer.
    pauseTimer();

    // Resetting the timer in the HTMl document.
    if (isVisible == 'stopwatch') {
        writeStopwatch('00', '00', '00', '00');
    } else {
        writeCountDown('00', '00', '00', '00');
    }

    // Resetting the elapsed time.
    elapsedTime = 0;
}

