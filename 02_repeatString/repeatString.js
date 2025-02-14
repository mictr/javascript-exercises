const repeatString = function (stringToRepeat, times) {
  if (times < 0) {
    return "ERROR";
  }

  let repeatedString = "";
  for (let i = 0; i < times; ++i) {
    repeatedString += stringToRepeat;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
