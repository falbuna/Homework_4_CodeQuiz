var startButton = document.querySelector("#start");
var quizElement = document.querySelector(".main");
var bodyEl = document.createElement('div');


// This is for the Timer
var startTime = 60;
var secondsElapsed = 0;
var interval;

function startQuiz() {

    setInterval(function () {
        const totalTime = startTime - secondsElapsed;
        document.getElementById('timer').innerText = 'Timer: ' + totalTime;

        secondsElapsed++;

        if(totalTime <= 0) {
            // stop
        }

    }, 1000);

    quizElement.append(bodyEl);
    quizElement.textContent = "First Question";

}



startButton.addEventListener("click", startQuiz);
