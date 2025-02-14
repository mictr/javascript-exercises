const convertToCelsius = function (fahrenheitTemp) {
  return roundToTenthsPlace((fahrenheitTemp - 32) * (5 / 9));
};

const convertToFahrenheit = function (celsiusTemp) {
  return roundToTenthsPlace(celsiusTemp * (9 / 5) + 32);
};

const roundToTenthsPlace = (num) => Math.round(num * 10) / 10;

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
