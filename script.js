const startButton = document.querySelector('#start');
const quizElement = document.querySelector('.main');
const bodyEl = document.createElement('div');
const promptElement = document.querySelector('#prompt');
const quizPrompt = document.createElement('h1');


const Quizquestions = [
    { q: 'How many versions of Bootstrap have currently been released?', a:['1', '2', '3', '4'], c: '4' },
    { q: 'Which company developed Javascript?', a:['Netscape', 'Google', 'Microsoft', 'Amazon'], c: 'Netscape' },
];

// This is for the Timer
var startTime = parseInt(75);
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

    // for (let j = 0; j < Quizquestions.length; j++){

        var question = Quizquestions[0].q;
        promptElement.innerHTML = question;
        promptElement.appendChild(quizPrompt);

        quizElement.innerHTML = '';
        for (let i = 0; i < Quizquestions[0].a.length; i++){
            var answers = Quizquestions[0].a[i];
            var li = document.createElement('li');
            var button = document.createElement("button");
            button.textContent = answers;
            li.appendChild(button);
            quizElement.appendChild(li);
        }
    }

    var answer = Quizquestions[0].c;

    quizElement.addEventListener('click', function(event) {
        event.preventDefault();
        if(event.target.matches("button")){
            var buttonTarget = event.target.textContent;
            console.log(buttonTarget)
        }if(answer === buttonTarget){
            console.log("Correct Answer!")
        }else(
            console.log("Incorrect Answer!")
        )
    });

    renderQuiz();
}

startButton.addEventListener("click", startQuiz);
