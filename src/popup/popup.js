import './popup.css';

    const location = document.getElementById('locationName');
    const temperature = document.getElementById('temperature');
    const weatherIcon = document.getElementById('weatherIcon');
    const condition = document.getElementById('condition');
    const thirdDayButton = document.getElementById('thirdDayButton');
    const forthDayButton = document.getElementById('forthDayButton');
    const todayTemperature = document.getElementById('todayTemperature')
    const todayIcon = document.getElementById('todayIcon');
    const tommorrowTemperature = document.getElementById('tommorrowTemperature');
    const tommorrowIcon = document.getElementById('tommorrowIcon');
    const thirdDayTemperature = document.getElementById('thirdDayTemperature');
    const thirdDayIcon = document.getElementById('thirdDayIcon');
    const forthDayTemperature = document.getElementById('forthDayTemperature');
    const forthDayIcon = document.getElementById('forthDayIcon');
   
    chrome.storage.local.get('weatherData', (result) => {
   
    const data = result.weatherData;

    if (data) {
        location.innerText = `${data.location.name}, ${data.location.country}`;
        temperature.innerText = `${data.current.temp_c}\u00B0C`;
        weatherIcon.src = `https:${data.current.condition.icon}`;
        condition.innerText = `${data.current.condition.text}`;

        todayTemperature.innerText = `${data.current.temp_c}\u00B0C`;
        todayIcon.src = `https:${data.current.condition.icon}`;

        tommorrowTemperature.innerText = `${data.forecast.forecastday[0].day.avgtemp_c}\u00B0C`;
        tommorrowIcon.src = `https:${data.forecast.forecastday[0].day.condition.icon}`;
        const [thirdYear, thirdMonth, thirdDay] = data.forecast.forecastday[1].date.split("-");
        const thirdDateString = `${thirdDay}-${thirdMonth}`
        thirdDayButton.innerText = `${thirdDateString}`;
        console.log(data.forecast.forecastday[1].day.avgtemp_c);
        thirdDayTemperature.innerText = `${data.forecast.forecastday[1].day.avgtemp_c}\u00B0C`;
        thirdDayIcon.src = `https:${data.forecast.forecastday[1].day.condition.icon}`;

        const [forthYear, forthMonth, forthDay] = data.forecast.forecastday[2].date.split("-");
        const forthDateString = `${forthDay}-${forthMonth}`
        forthDayButton.innerText = `${forthDateString}`;
        forthDayTemperature.innerText = `${data.forecast.forecastday[2].day.avgtemp_c}\u00B0C`;
        forthDayIcon.src = `https:${data.forecast.forecastday[2].day.condition.icon}`;
    }

});