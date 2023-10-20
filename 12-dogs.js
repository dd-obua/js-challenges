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

// Dog number 1 is
// an adult, and is 5 years old
// still a puppy 🐶
