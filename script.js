// ----------------------------------------
//    Countdown Timer/Stop Watch Toggler  
// ----------------------------------------

// Toggling Between Stopwatch and CountDown-Timer.
const toggle = document.querySelector('.toggle');
const stopwatch = document.getElementById('stopwatch');
const countdown = document.getElementById('countdown');
let isVisible = 'stopwatch';

toggle.addEventListener('click', function() {
    pause(true);
    if (stopwatch.style.display === 'none') {       //toggled to stopwatch
        stopwatch.style.display = 'block';
        countdown.style.display = 'none';
        toggle.textContent = 'Stop Watch';
        isVisible = 'stopwatch';
    } else {                                       //toggled to countdown
        stopwatch.style.display = 'none';
        countdown.style.display = 'block';
        toggle.textContent = 'Count Down Timer';
        isVisible = 'countdown';
    }
});

// ----------------------------------------
//         Doc Writer functions          
// ----------------------------------------

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

function writeMilliSecondToDoc(givenMilliSecondTime, writeToDiv) {

    // Calculating the hours, minutes and seconds from timer.
    let diffInHrs = givenMilliSecondTime / 3600000;
    let hour = Math.floor(diffInHrs);
    
    let diffInMin = (diffInHrs - hour) * 60;
    let minute = Math.floor(diffInMin);
    
    let diffInSec = (diffInMin - minute) * 60;
    let second = Math.floor(diffInSec);
    
    let diffInMs = (diffInSec - second) * 100;
    let milliSecond = Math.floor(diffInMs);
    
    // Padding 0 before single digit number.
    hour = hour.toString().padStart(2, '0');
    minute = minute.toString().padStart(2, '0');
    second = second.toString().padStart(2, '0');
    milliSecond = milliSecond.toString().padStart(2, '0');

    // Displaying the timer in the HTMl document.
    if (writeToDiv == 'stopwatch') {
        writeStopwatch(hour, minute, second, milliSecond);
    } else if (writeToDiv == 'cdtimer') {
        writeCountDown(hour, minute, second, milliSecond);
    } else {
        alert('Error in `function writeMilliSecondToDoc()`: Wrong Parameters');
    }

}

// ----------------------------------------
//      Main Logic for Stop Watch          
// ----------------------------------------

// Declaring Global variables.
let elapsedTime = 0;
let hasPausedStopWatch = true;
let timerIntervalStopWatchId = null;


// Function to pause the Stop Watch & Count Down timer.
function pause(forResetOrToggle = false) {
    if (hasPausedStopWatch && hasPausedCountDownTimer && !forResetOrToggle) {
        confirm('The timer is already Paused...');
    }
    else if (isVisible == 'stopwatch') {
        clearInterval(timerIntervalStopWatchId);
        hasPausedStopWatch = true;

    } 
    else if (isVisible == 'countdown') {
        clearInterval(timerIntervalCountDownTimerId);
        hasPausedCountDownTimer = true;
        
    } 
    else {
        alert('Error in `function pause()`');
    }
}

// Function to start the Stop Watch.
function startStopWatch() {
    
    // For checking if the timer is already running.
    if(hasPausedStopWatch){
        
        hasPausedStopWatch = false;
        
        // Starting time in milliseconds.
        let startTime = Date.now() - elapsedTime;
        
        timerIntervalStopWatchId = setInterval(function() {
            
            // Calculating elapsed time in milliseconds.
            elapsedTime = Date.now() - startTime;
            
            // Displaying the timer in the HTMl document.
            writeMilliSecondToDoc(elapsedTime, 'stopwatch');
            
        }, 10);
    }
}

// Function to reset the Stop Watch.
function resetStopWatch() {
    
    // pausing the timer.
    pause(true);
    
    // Resetting the timer in the HTMl document.
    
    writeStopwatch('00', '00', '00', '00');
    
       
    
    
    // Resetting the elapsed time.
    elapsedTime = 0;
}

// ----------------------------------------
//      Main Logic for Countdown Timer  
// ----------------------------------------

// Declaring Global variables.
let isTimerSet = false;
let milliSecCountDown = 0;
let timerIntervalCountDownTimerId = null;
let hasPausedCountDownTimer = true;


// Function to set the Countdown Timer.
function setCountDownTimer() {
    let min = parseFloat(prompt("Set your timer (in min):", "5.0"));
    if (min == null || isNaN(min) || min == "" || min <= 0) {
        alert('Enter a Valid value !!!...');
    } else {
        milliSecCountDown = min * 60000;
        writeMilliSecondToDoc(milliSecCountDown, 'cdtimer');
        isTimerSet = true;
        pause(true);
        
    }
}

// Function to start the Countdown Timer.
function startCountDownTimer() {
    if( !isTimerSet ) {
        alert('Please Set the timer !!!...');
    } 
    else if(hasPausedCountDownTimer) {
        hasPausedCountDownTimer = false;
        timerIntervalCountDownTimerId = setInterval(function() {
            
            // Calculating elapsed time in milliseconds.
            milliSecCountDown = milliSecCountDown-10;
            
            // Displaying the timer in the HTMl document.
            writeMilliSecondToDoc(milliSecCountDown, 'cdtimer');
            
            // When the timer reaches 0.
            if (milliSecCountDown <= 0) {
                resetCountDownTimer();
                alert('Time Up !!!...');
            }
            
        }, 10);
    }
}

// Function to reset the Countdown Timer.
function resetCountDownTimer() {
    pause(true);
    writeCountDown('00', '00', '00', '00');
    milliSecCountDown = 0;
    isTimerSet = false;
}
