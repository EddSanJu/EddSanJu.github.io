function changeClass () {
    var x = document.getElementById("responsive-nav");
    if (x.className === 'nav-bar__') {
        x.className += 'active';
    } else {
        x.className = 'nav-bar__';
    }
}

let day = new Date();
let today = day.getDay();
let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


fetch('https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=3d7765adfda40026bacdbba28683a6da')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        for (i=0, j=1; i<5; i++, j++) {
            const section = document.createElement('section');
            var forecastIcon = data.list[j].weather[0].icon;
            const icon = document.createElement('img');
            icon.src = `https://openweathermap.org/img/w/${forecastIcon}.png`;
            icon.className = 'forecast-icon';
            section.appendChild(icon);
            var forecastTemp = data.list[j].main.temp;
            const temp = document.createElement('p');
            temp.innerHTML = `${forecastTemp}&deg;F`;
            temp.className = 'forecast-temp';
            var dayforecast = dayOfWeek[today + i];
            const day = document.createElement('p');
            day.innerHTML = `${dayforecast}`;
            day.className = 'forecast-day';
            section.appendChild(temp);
            section.appendChild(day);
            document.querySelector('div.forecast-container').appendChild(section);
        }
        const tempContainer = document.createElement('div');
        tempContainer.className = 'temp-container';
        const temp = document.createElement('p');
        var tempData = data.list[0].main.temp;
        temp.innerHTML = `Temp: ${tempData}&deg;F`;
        console.log(tempData);
        let condition = document.createElement('p');
        let conditionData = data.list[0].weather[0].main;
        condition.innerHTML = `Today Condition ${conditionData}`;
        let humidity = document.createElement('p');
        let humidityData = data.list[0].main.humidity;
        humidity.innerHTML = `Current Humidity: ${humidityData}%`;
        tempContainer.appendChild(temp);
        tempContainer.appendChild(condition);
        tempContainer.appendChild(humidity);
        const tempIcon = document.createElement('img'); 
        tempIcon.src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
        tempIcon.className = 'temp-icon';

        tempContainer.appendChild(tempIcon);
        document.querySelector('div.current-temp').appendChild(tempContainer);
    })