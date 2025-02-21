const fibonacci = function (targetMember) {
  if (Number.isNaN(parseInt(targetMember))) {
    return 0;
  }

  const targetNumber = parseInt(targetMember);
  if (targetNumber < 0) {
    return "OOPS";
  }
  if (targetNumber === 0) {
    return 0;
  }
  if (targetNumber === 1 || targetNumber === 2) {
    return 1;
  }
  const memo = new Map([
    [1, 1],
    [2, 1],
  ]);

  for (let i = 3; i <= targetNumber; ++i) {
    if (!memo.has(i)) {
      memo.set(i, memo.get(i - 2) + memo.get(i - 1));
    }

    if (memo.has(targetNumber)) {
      return memo.get(targetNumber);
    }
  }

  return 0;
};

// Do not edit below this line
module.exports = fibonacci;
