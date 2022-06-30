let time = {
    seconds: 0,
    minutes: 0,
    hours: 0
}
let timer = setInterval( () => {
    time.seconds++;
    if (time.seconds === 60) {
        time.minutes++;
        time.seconds = 0;
    }

    if (time.minutes === 60) {
        time.hours++;
        time.minutes = 0;
    }
    document.getElementById("timer").innerHTML = `${time.hours} ч ${time.minutes} мин ${time.seconds} с`;

}, 1000);
