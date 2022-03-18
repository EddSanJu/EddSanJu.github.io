document.addEventListener("DOMContentLoaded", function() {
    var speed = document.getElementById('speed').innerText;
    var temp = document.getElementById('temp').innerText;
    let chill = document.getElementById('chill');
    chill.innerHTML = getwindChill(speed, temp);
});

function getwindChill(speed, temp) {
    let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    windChill = Math.floor(windChill);
    windChill = (windChill > temp) ? temp : windChill;
    return windChill;
}