'use strict';

const checkDogs = (dogsJuli, dogsKate) => {
  const correctDogsJuli = dogsJuli.slice();

  // Mutate correctDogsJuli
  correctDogsJuli.splice(0, 1);
  correctDogsJuli.splice(-2);

  const dogs = [...correctDogsJuli, ...dogsKate];
  dogs.forEach((dog, i) => {
    const str =
      dog >= 3 ? `an adult, and is ${dog} years old` : 'still a puppy 🐶';
    console.log(`Dog number ${i + 1} is ${str}`);
  });
};

const juli = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
checkDogs(juli, kate);
console.log('');

const juli2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];
checkDogs(juli2, kate2);
console.log('');

// Dog ages to human ages
const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map((dog) => (dog <= 2 ? 2 * dog : 16 + dog * 4));
  const adults = humanAges.filter((age) => age >= 18);
  return adults.reduce((acc, cur) => acc + cur) / adults.length;
};

const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const avg1 = calcAverageHumanAge(dogAges1);
const avg2 = calcAverageHumanAge(dogAges2);
console.log('Average 1:', avg1);
console.log('Average 2:', avg2);
