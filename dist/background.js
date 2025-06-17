/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
async function fetchWeather() {
  chrome.storage.sync.get("userLocation", async (result) => {
    const location = result.userLocation || "Falkirk"; // fallback
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=58863122eea94cbabf690314251306&q=${location}&days=3&aqi=no&alerts=no`);
      const data = await response.json();
      chrome.storage.local.set({ weatherData: data });
    } catch (error) {
      console.error("Weather fetch failed", error);
    }
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "refreshWeather") {
    fetchWeather();
  }
});


/******/ })()
;
//# sourceMappingURL=background.js.map