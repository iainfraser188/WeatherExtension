import './popup.css';

chrome.storage.local.get('weatherData', (result) => {
    const data = result.weatherData;
    const location = document.getElementById('locationName');
    const temperature = document.getElementById('temperature');
    const weatherIcon = document.getElementById('weatherIcon');
    const condition = document.getElementById('condition');
    const thirdDayButton = document.getElementById('thirdDayButton');
    const forthDayButton = document.getElementById('forthDayButton');
   

    if (data) {
        location.innerText = `${data.location.name}, ${data.location.country}`;
        temperature.innerText = `${data.current.temp_c}\u00B0C`;
        weatherIcon.src = `https:${data.current.condition.icon}`;
        condition.innerText = `${data.current.condition.text}`;

        const [thirdYear, thirdMonth, thirdDay] = data.forecast.forecastday[1].date.split("-");
        const thirdDateString = `${thirdDay}-${thirdMonth}`
        thirdDayButton.innerText = `${thirdDateString}`;

        const [forthYear, forthMonth, forthDay] = data.forecast.forecastday[2].date.split("-");
        const forthDateString = `${forthDay}-${forthMonth}`
        forthDayButton.innerText = `${forthDateString}`;
    }

});