const startButton = document.querySelector('#start');
const quizElement = document.querySelector('.main');
const bodyEl = document.createElement('div');
const promptElement = document.querySelector('#prompt');
const quizPrompt = document.createElement('h1');

// The quiz prompts get generated from this array.
const Quizquestions = [
    { q: 'How many versions of Bootstrap have currently been released?', a:['1. 1', '2. 2', '3. 3', '4. 4'], c: '4. 4' },
    { q: 'Which company developed Javascript?', a:['1. Netscape', '2. Google', '3. Microsoft', '4. Amazon'], c: '1. Netscape'},
];

let CorrectAnswers = 0;


// This is for the Timer
function startQuiz() {
    var startTime = 75;
    var secondsElapsed = 0;

    var intervalId = setInterval(function () {
        var totalTime = startTime - secondsElapsed;
        document.getElementById('timer').innerText = 'Timer: ' + totalTime;

        secondsElapsed++;

        if(totalTime <= 0) {
                clearInterval(intervalId);
        }}, 1000);

    renderQuiz();
    
    function renderQuiz(){
        for (var j = 0; j < Quizquestions.length; j++){
        // Question gets generated from the Quizquestions Array
        const question = Quizquestions[j].q;
        promptElement.innerHTML = question;
        promptElement.appendChild(quizPrompt);
        quizElement.innerHTML = '';
            // The Choices get generated from the Quizquestions Array and placed inside buttons.
            for (let i = 0; i < Quizquestions[j].a.length; i++){
            const answers = Quizquestions[j].a[i];
            const li = document.createElement('li');
            const button = document.createElement("button");
            button.textContent = answers;
            li.appendChild(button);
            quizElement.appendChild(li);
            }
        // The mouse click event verifies if the user selected the correct answer for the prompt.
        const answer = Quizquestions[j].c;
        quizElement.addEventListener('click', function(event) {
            event.stopPropagation();
        let buttonTarget = event.target.textContent;
        if(answer === buttonTarget){
            CorrectAnswers ++;
            console.log('CorrectAnswers')
        }else{
            console.log("Incorrect!")
        }
        });

        return Quizquestions[j];
    }};

}

startButton.addEventListener('click', startQuiz);
