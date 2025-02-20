const palindromes = function (input) {
  // replace all non-characters with empty string
  const sanitizedInput = input.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
  console.log({ sanitizedInput });
  // check for palindrome

  for (
    let startIndex = 0, endIndex = sanitizedInput.length - 1;
    startIndex < endIndex;
    ++startIndex, --endIndex
  ) {
    if (sanitizedInput[startIndex] !== sanitizedInput[endIndex]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
