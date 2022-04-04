function getwindChill(speed, temp) {
    let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    windChill = Math.floor(windChill);
    windChill = (windChill > temp) ? temp : windChill;
    return windChill;
}
// https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=30762b7d0c21afae183f3c5a548a12cb
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=3d7765adfda40026bacdbba28683a6da";

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var currentDescription = data.list[0].weather[0].description;
        var highTemperature = data.list[0].main.temp_max;
        var humidity = data.list[0].main.humidity;
        var windSpeed = data.list[0].wind.speed;
        var temp = data.list[0].main.temp;
        document.getElementById("description").innerHTML = currentDescription;
        document.getElementById("max-temp").innerHTML = highTemperature;
        document.getElementById("humidity").innerHTML = humidity;
        document.getElementById("wind-speed").innerHTML = windSpeed;
        var windChill = getwindChill(windSpeed, temp);
        document.getElementById("wind-chill").innerHTML = windChill;
        var temp1 = data.list[1].main.temp;
        var temp2 = data.list[2].main.temp;
        var temp3 = data.list[3].main.temp;
        var temp4 = data.list[4].main.temp;
        var temp5 = data.list[5].main.temp;
        document.getElementById("d1").innerHTML = temp1;
        document.getElementById("d2").innerHTML = temp2;
        document.getElementById("d3").innerHTML = temp3;
        document.getElementById("d4").innerHTML = temp4;
        document.getElementById("d5").innerHTML = temp5;
        // var icon = document.createElement('img');
        // icon.setAttribute('src', data.list[0].weather[0].icon);
        // document.querySelector('div.img').appendChild(icon);
    })

