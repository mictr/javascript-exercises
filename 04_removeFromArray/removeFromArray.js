const removeFromArray = function (numArray, ...numbersToRemove) {
  return numArray.filter((x) => !numbersToRemove.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
