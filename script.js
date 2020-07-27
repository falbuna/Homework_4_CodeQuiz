const startButton = document.querySelector('#start');
const quizElement = document.querySelector('.main');
const bodyEl = document.createElement('div');
const promptElement = document.querySelector('#prompt');
const quizPrompt = document.createElement('h1');


const prompt1 = {
    'Question': 'How many versions of Bootstrap have been released?',
    'Choices': ['1. 1', '2. 2', '3. 3', '4. 4']}

const prompt2 = {
    'Question': 'Which company developed Javascript?',
    'Choices': ['1. Netscape', '2. Google', '3. Microsoft', '4. Amazon']}


// This is for the Timer
var startTime = parseInt(60);
var secondsElapsed = 0;

function startQuiz() {

    setInterval(function () {
        const totalTime = parseInt(startTime - secondsElapsed);
        document.getElementById('timer').innerText = 'Timer: ' + totalTime;

        secondsElapsed++;

        if(totalTime === 0) {
            function stopTimer(){
                clearInterval(startQuiz);
                alert("Time is up!");
            }
        }

    }, 1000);

    // The First Prompt of the Quiz

    renderQuiz();

    function renderQuiz(){

        const question = prompt1['Question'];
        promptElement.innerHTML = question;
        promptElement.appendChild(quizPrompt);

        quizElement.innerHTML = '';
        for (let i = 0; i < prompt1.Choices.length; i++){
            var answers = prompt1.Choices[i];
            var li = document.createElement('li');
            var button = document.createElement("button");
            button.textContent = answers;
            li.appendChild(button);
            quizElement.appendChild(li);
        }

    }

    quizElement.addEventListener('click', function(event) {
        console.log("I've Been Clicked!")});
    
    renderQuiz();

}

startButton.addEventListener("click", startQuiz);
