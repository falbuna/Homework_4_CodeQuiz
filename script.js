const startButton = document.querySelector('#start');
const quizElement = document.querySelector('.main');
const bodyEl = document.createElement('div');
const promptElement = document.querySelector('#prompt');
const quizPrompt = document.createElement('h1');

const prompt1 = ['How many versions of Bootstrap have been released?']
const answers1 = ['1. 1', '2. 2', '3. 3', '4. 4'];

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

    renderQuestion();

    function renderQuestion(){

        const question = prompt1;
        promptElement.innerHTML = question;
        promptElement.appendChild(quizPrompt);

    }

    renderQuestion();


    renderAnswers();

    function renderAnswers(){

        quizElement.innerHTML = '';
        for (let i = 0; i <answers1.length; i++){
            const answers = answers1[i];
            const li = document.createElement('li');
            var button = document.createElement("button");
            button.textContent = answers;
            li.appendChild(button);
            quizElement.appendChild(li);
        }
    }

    renderAnswers();
    
}

startButton.addEventListener("click", startQuiz);
