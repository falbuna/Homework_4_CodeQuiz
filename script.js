const mainElement = document.getElementById("main");

function setTimer() {

    let secondsLeft = 60;

    const timerInterval = setInterval(function() {
       document.getElementById('timer').innerText = 'Timer: ' + secondsLeft;
        secondsLeft--;

        if (count > 0) {
            document.getElementById('timer').innerText = '';
        }
    }, 1000);
}

setTimer();