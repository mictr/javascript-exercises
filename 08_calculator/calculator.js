const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  return array.reduce((total, currentNumber) => total + currentNumber, 0);
};

const multiply = function (array) {
  return array.reduce((product, currentNumber) => product * currentNumber, 1);
};

const power = function (number, power) {
  return Math.pow(number, power);
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  }

  let product = 1;
  for (let i = 1; i <= number; ++i) {
    product *= i;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
