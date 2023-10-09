const findTheOldest = function(people) {
    let oldest = 0;
    let result = '';
    people.forEach(person => {
      if (person.yearOfDeath == undefined) {person.yearOfDeath = 2023}
      let age = person.yearOfDeath - person.yearOfBirth;
      if ((age) > oldest) {
        oldest = age;
        result = person;
      }
    });
    return result;
  };

// Do not edit below this line
module.exports = findTheOldest;
