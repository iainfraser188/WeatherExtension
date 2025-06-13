/******/ (function() { // webpackBootstrap
/*!****************************!*\
  !*** ./src/popup/popup.js ***!
  \****************************/
chrome.storage.local.get('weatherData', (result) => {
    const data = result.weatherData;
    const weatherDiv = document.getElementById('weather');
    console.log("data popup.js",data);
    if (data) {
        weatherDiv.innerHTML = 
        `<h4>${data.location.name} ${data.location.country}</h4>   
        <p>Temperature ${data.current.temp_c}\u00B0C</p>
        <p>${data.current.condition.text}</p>
        <img src="https:${data.current.condition.icon}" alt="Weather icon">`
    }
});
/******/ })()
;
//# sourceMappingURL=popup.js.map