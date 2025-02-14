const sumAll = function (startNum, endNum) {
  const errorConditions =
    typeof startNum !== "number" ||
    typeof endNum !== "number" ||
    !Number.isInteger(startNum) ||
    !Number.isInteger(endNum) ||
    startNum < 0 ||
    endNum < 0;

  if (errorConditions) {
    return "ERROR";
  }

  const lowerNumber = Math.min(startNum, endNum);
  const higherNumber = Math.max(startNum, endNum);
  let sum = 0;
  for (let i = lowerNumber; i <= higherNumber; ++i) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
