chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create('fetchWeather', { periodInMinutes: 30 });
    fetchWeather();
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'fetchWeather') {
        fetchWeather();
    }
});

async function fetchWeather() {
    console.log("Fetching weather data...");
    try {
        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=58863122eea94cbabf690314251306&q=Falkirk&days=1&aqi=no&alerts=no');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        chrome.storage.local.set({ weatherData: data }, () => {
            console.log("Weather data saved to local storage.");
        });
    } catch (error) {
        console.error('Weather fetch failed:', error);
    }
}
 