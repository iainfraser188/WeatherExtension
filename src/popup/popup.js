chrome.storage.local.get('weatherData', (result) => {
    const data = result.weatherData;
    const weatherDiv = document.getElementById('weather');
    if (data) {
        weatherDiv.innerHTML = 
        `<p>${data.location.name}</p>`
    }
});