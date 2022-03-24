const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let town = document.createElement('section');
            let textDiv = document.createElement('div');
            textDiv.classList.add('grid-text-img');
            let h2 = document.createElement('h2');
            let pMotto = document.createElement('p');
            let pYearFounded = document.createElement('p');
            let pCurrentPopulation = document.createElement('p');
            let pAverageRainfall = document.createElement('p');
            h2.textContent = towns[i].name;
            pMotto.textContent = 'Motto: ' + towns[i].motto;
            pYearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            pCurrentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
            pAverageRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
            textDiv.appendChild(h2);
            textDiv.appendChild(pMotto);
            textDiv.appendChild(pYearFounded);
            textDiv.appendChild(pCurrentPopulation);
            textDiv.appendChild(pAverageRainfall);
            town.appendChild(textDiv);
            let photo = document.createElement('img');
            photo.setAttribute('src', towns[i].photo);
            town.appendChild(photo);
            document.querySelector('div.towns').appendChild(town);

        }
    });