document.querySelector('#search').addEventListener('submit',  async (event) => {
    event.preventDefault();


    const cityName = document.querySelector('#city_name').value;
    if(!cityName){
        return alert('Digite uma cidade válida..');
    }

    const apiKey = `2ee2b8851d5fd0b86621a1817949231d`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    const results = await fetch(apiUrl);
    const json = await results.json();

    if(json.cod === 200){
        showInfo({
            city : json.name,
            country : json.sys.country, 
            temp : json.main.temp,
            tempMax : json.temp_max,
            tempMin : json.temp_min,
            description : json.weather[0].description,
            tempIcon : json.weather[0].icon,
            windSpeed : json.wind.speed,
            humidity : json.main.humidity, 
        })
    } else {
        showAlert('Não foi possivel localizar')
    }
});

function showInfo(json){
    showAlert(' ');
    document.querySelector('#weather').classList.add('show');

    document.querySelector('#tittle').innerHTML = `${json.city}, ${json.country}`
}

function showAlert(msg){
    document.querySelector('#alert').innerHTML = msg;
}