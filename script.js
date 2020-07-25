var startButton = document.querySelector("#start");

var startTime = 60;
var secondsElapsed = 0;
var interval;

function startTimer() {

    setInterval(function () {
        const totalTime = startTime - secondsElapsed;
        document.getElementById('timer').innerText = 'Timer: ' + totalTime;

        secondsElapsed++;

        if(totalTime <= 0) {
            // stop
        }

    }, 1000);
}

startButton.addEventListener("click", startTimer);