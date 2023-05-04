const toggle = document.querySelector('.toggle');
const stopwatch = document.getElementById('stopwatch');
const countdown = document.getElementById('countdown');

toggle.addEventListener('click', function() {
    if (stopwatch.style.display === 'none') {
        stopwatch.style.display = 'block';
        countdown.style.display = 'none';
        toggle.textContent = 'Stop Watch';
    } else {
        stopwatch.style.display = 'none';
        countdown.style.display = 'block';
        toggle.textContent = 'Count Down Timer';
    }
});
