const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    hr.textContent = hour;
    min.textContent = minutes;
    sec.textContent = seconds;

    if(hour < 10) hr.textContent = "0" + hour;

    if(minutes < 10) min.textContent = "0" + minutes;

if(seconds < 10) sec.textContent = "0" + seconds;
})