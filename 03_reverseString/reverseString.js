const reverseString = function (stringToReverse) {
  const stringArray = stringToReverse.split("");
  for (let i = 0, j = stringArray.length - 1; i < j; ++i, --j) {
    const temp = stringArray[i];
    stringArray[i] = stringArray[j];
    stringArray[j] = temp;
  }

  return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
