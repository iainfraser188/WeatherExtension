chrome.runtime.onInstallec.addListener(() => {
    chrome.alarms.create('fetchWeather',{periodInMinutes: 30});

    fetchWeather();
});


chrome.alarms.onAlarm.AddListener((alarm) => {
    if (alarm.name === 'fetchWeather') {
        fetchWeather();
    }
});

async function fetchWeather() {
    try {
        const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=58863122eea94cbabf690314251306&q=Falkirk&days=1&aqi=no&alerts=no')
        const data = await response.json();
        chrome.storage.local.set({weatherData: data});
    } catch (error) {
        console.error('Weather fetch failed', error);
    }
}