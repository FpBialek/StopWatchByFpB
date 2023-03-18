let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let hour = 00;
let minute = 00;
let seconds = 00;
let count = 00;

function stoper(){
    if (watch){
        count++;
    
    if (count == 100){
        seconds++;
        count = 0;
    }

    if (seconds == 60){
        minute++;
        seconds = 0;
    }

    if (minute == 60){
        hour++;
        minute = 0;
        seconds = 0;
    }

let hourString = hour;
let minuteString = minute;
let secondsString = seconds;
let countString = count;

if (hour < 10) {
    hourString = "0" + hourString;
}
if (minute < 10) {
    minuteString = "0" + minuteString;
}
if (seconds < 10) {
    secondsString = "0" + secondsString;
}
if (count < 10) {
    countString = "0" + countString;
}

document.getElementById('hour').innerHTML = hourString;
document.getElementById('minute').innerHTML = minuteString;
document.getElementById('seconds').innerHTML = secondsString;
document.getElementById('count').innerHTML = countString;
setTimeout(stoper, 10);
}
}

startButton.addEventListener('click', function(){
    watch = true;
    stoper();
});

stopButton.addEventListener('click', function(){
    watch = false;
});

resetButton.addEventListener('click', function(){
    watch = false;
    hour = 0;
    minute = 0;
    seconds = 0;
    count = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});


