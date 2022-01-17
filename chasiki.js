(function clock() {
    const d = new Date;

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    const runClock = () => {
        let displayHours;
        let displayMinutes;
        let displaySeconds;

        const htmlHours = document.getElementById('hours');
        const htmlMinutes = document.getElementById('minutes');
        const htmlSeconds = document.getElementById('seconds');

        if (hours >= 24) {
            hours = 0;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        if (hours < 10) {
            displayHours = `0${hours}`;
        } else {
            displayHours = hours;
        }
        if (minutes < 10) {
            displayMinutes = `0${minutes}`;
        } else {
            displayMinutes = minutes;
        }
        if (seconds < 10) {
            displaySeconds = `0${seconds}`;
        } else {
            displaySeconds = seconds;
        }

        htmlHours.innerText = displayHours;
        htmlMinutes.innerText = displayMinutes;
        htmlSeconds.innerText = displaySeconds;

        seconds++;
    };

    window.addEventListener('DOMContentLoaded', () => {
        setInterval(runClock, 1000);
    });

    const darkModeBtn = document.getElementById('dark-btn');
    const center = document.querySelector('.center');

    const changeTheme = () => {
        center.classList.toggle('darkmode');
    };

    darkModeBtn.addEventListener('click', changeTheme);

})();
