gsap.from("h2", {delay: 0.8, duration: 1.5, y: -50, ease: "power0.easeNone", opacity: 0})
gsap.from(".container", {opacity: 0, duration: 1.5, delay: 1.9, stagger: .6})
gsap.from("#buttons", {delay: 0.8, duration: 1.5, y: 50, ease: "power0.easeNone", opacity: 0})

const startBtn = document.querySelector("#startBtn");
const clearBtn = document.querySelector("#clearBtn");

startBtn.addEventListener("click", getTime);

function getTime() {
    const hoursInput = Number(document.querySelector("#hours").value);
    const minutesInput = Number(document.querySelector("#minutes").value);
    const secondsInput = Number(document.querySelector("#seconds").value);

    if (isNaN(hoursInput) || isNaN(minutesInput) || isNaN(secondsInput)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a number",
        });
    }

    else {
    let amountTime = (hoursInput * 60 *60) + (minutesInput * 60) + secondsInput;

    function calculateTime() {
    startBtn.disabled = true;
    const timerCountdown = document.querySelector("#timerCountdown");

    let hours = Math.floor(amountTime/3600%60);
    let minutes = Math.floor(amountTime/60%60);
    let seconds = amountTime%60;

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timerCountdown.textContent = `${hours} : ${minutes} : ${seconds}`;
    amountTime --;

    if(amountTime < 0) {
        stopTimer();
        amountTime = 0;
        startBtn.disabled = false;
        document.querySelector("#endSound"). play();
    }

    function stopTimer() {
        clearInterval(timerId);
    }

    clearBtn.addEventListener("click", () => {
        stopTimer();
        timerCountdown.textContent = "00 : 00 : 00";
        startBtn.disabled = false;
    })
    }
    }

    let timerId = setInterval(calculateTime, 1000);
}












