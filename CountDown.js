const timeDisplay = document.getElementById("timeDisplay");
const startButton = document.querySelector(".startButton");
const stopButton = document.querySelector(".stopButton");
const resetButton = document.querySelector(".resetButton");


let startTime = 0;
let CurrentTime = 0;
let timerInterval;


function startTimer() {

    startTime = Date.now() - CurrentTime;

    // Start updating the timer display
    timerInterval = setInterval(() => {
        CurrentTime = Date.now() - startTime;
        timeDisplay.textContent = formatTime(CurrentTime);
    }, 100); // Update every 100ms

    // Disable the start button and enable the stop button
    startButton.disabled = true;
    stopButton.disabled = false;
}

// Format the elapsed time into HH:MM:SS.ms
function formatTime(time) {
    const milliseconds = Math.floor((time % 1000) / 100);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${milliseconds}`;
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval); // Stop the timer updates
    startButton.disabled = false; // Re-enable the start button
    stopButton.disabled = true; // Disable the stop button
}

// Reset the timer
function resetTimer() {
    clearInterval(timerInterval); // Stop the timer
    CurrentTime = 0; // Reset elapsed time to 0
    timeDisplay.textContent = "00:00:00.0"; // Reset the display
    startButton.disabled = false; // Re-enable the start button
    stopButton.disabled = true; // Disable the stop button
}

// Attach event listeners to buttons
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);