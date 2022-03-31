fishURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(fishURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var eventos = data.towns[2].events;
        console.log(eventos);
        eventos.map(evento => {
            var sEvent = document.createElement('h3');
            sEvent.textContent = evento;
            console.log(sEvent);
            document.querySelector('div.events-soda').appendChild(sEvent);
        })
        var name = data.towns[2].name;
        var population = data.towns[2].currentPopulation;
        var founded = data.towns[2].yearFounded;
        var rainfall = data.towns[2].averageRainfall;
        var motto = data.towns[2].motto;
        var sName = document.createElement('h2');
        sName.textContent = name;
        var pPopulation = document.createElement('p');
        pPopulation.textContent = `Population: ${population}`;
        var pFounded = document.createElement('p');
        pFounded.textContent = `Founded: ${founded}`;
        var pRainfall = document.createElement('p');
        pRainfall.textContent = `Rainfall: ${rainfall}`;
        var pMotto = document.createElement('p');
        pMotto.textContent = `motto: ${motto}`;
        document.querySelector('div.information').appendChild(sName);
        document.querySelector('div.information').appendChild(pPopulation);
        document.querySelector('div.information').appendChild(pFounded);
        document.querySelector('div.information').appendChild(pRainfall);
        document.querySelector('div.information').appendChild(pMotto);

        // document.querySelector('h3.events-soda').innerHTML = eventos;
    })