var countDownDate = new Date("March 27, 2024 11:11").getTime();
var Timer = document.getElementById("timer")
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    Timer.innerHTML = `<div class="time">
    <div><span class="day">${days}</span><br>Days</div> <div><span class="hour">${hours}</span><br>Hours</div>
       <div><span class="minute">${minutes}</span><br>Minutes</div><div><span class="second">${seconds}</span><br>Seconds</div></div>`;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);


