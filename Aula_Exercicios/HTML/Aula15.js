document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityName = document.querySelector('#city_name').value;
    if (!cityName) {
        return alert('Digite uma cidade válida..');
    }

    const apiKey = `2ee2b8851d5fd0b86621a1817949231d`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pt_br`;

    const results = await fetch(apiUrl);
    const json = await results.json();

    if (json.cod === 200) {
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            description: json.weather[0].description,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity,
        });
    } else {
        showAlert('Não foi possível localizar');
    }
});

function showInfo(json) {
    showAlert(' ');
    document.querySelector('#weather').classList.add('show');

    document.querySelector('#tittle').innerHTML = `${json.city}, ${json.country}`;
    document.querySelector('#temp_value').innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')}<sup>°C</sup>`;
    document.querySelector('#temp_description').innerHTML = `${json.description}`;
    document.querySelector('#temp_img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

    document.querySelector('#temp_max').innerHTML = `${json.tempMax.toFixed(1)} <sup>°C</sup>`;
    document.querySelector('#temp_min').innerHTML = `${json.tempMin.toFixed(1)} <sup>°C</sup>`;
    document.querySelector('#humidity').innerHTML = `${json.humidity}%`;
    document.querySelector('#wind').innerHTML = `${json.windSpeed} km/h`;
}

function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;
}
