/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/options/options.js ***!
  \********************************/
const saveButton = document.getElementById("saveButton");
const locationInput = document.getElementById("locationInput");
const statusMessage = document.getElementById("statusMessage");

saveButton.addEventListener("click", () => {
  const location = locationInput.value.trim();
  if (location) {
    chrome.storage.sync.set({ userLocation: location }, () => {
      statusMessage.textContent = "Location saved!";
      setTimeout(() => (statusMessage.textContent = ""), 2000);
    });
  }
});

chrome.runtime.sendMessage({ action: "refreshWeather" });

/******/ })()
;
//# sourceMappingURL=options.js.map