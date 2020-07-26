const startButton = document.querySelector('#start');
const quizElement = document.querySelector('.main');
const bodyEl = document.createElement('div');

const promptElement = document.querySelector('#prompt');
const quizPrompt = document.createElement('h1');

// This is for the Timer
var startTime = 60;
var secondsElapsed = 0;
var interval;

function startQuiz() {

    setInterval(function () {
        const totalTime = startTime - secondsElapsed;
        document.getElementById('timer').innerText = 'Timer: ' + totalTime;

        secondsElapsed++;

        if(totalTime === 0) {
            function stopTimer(){
                clearInterval(startQuiz);
            }
        }

    }, 1000);

    // The First Prompt of the Quiz
    promptElement.appendChild(quizPrompt);
    promptElement.textContent = "First Question";

    quizElement.append(bodyEl);
    quizElement.textContent = "Who What Where Why";

}

startButton.addEventListener("click", startQuiz);
