const convertToCelsius = function(f) {
  let answer = (f-32)* 5.0/9;
  return Math.round(answer*10)/10;
};

const convertToFahrenheit = function(c) {

  let answer = (c*9.0/5)+32;
  return Math.round(answer*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
