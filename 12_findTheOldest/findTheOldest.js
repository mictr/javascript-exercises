const computeAge = (birthYear, deathYear = new Date().getFullYear()) => {
  return deathYear - birthYear;
};

const findTheOldest = function (people) {
  const oldestPerson = people.reduce((currentOldest, currentPerson) => {
    const currentOldestAge = computeAge(
      currentOldest.yearOfBirth,
      currentOldest.yearOfDeath
    );
    const currentPersonAge = computeAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );

    return currentOldestAge >= currentPersonAge ? currentOldest : currentPerson;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
