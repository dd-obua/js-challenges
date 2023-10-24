'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Add recFood property
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2. Determine how Sarah's dog is eating
const okay = (current, recommended) => {
  return current >= recommended * 0.9 && current <= recommended * 1.1;
};
const tooLittle = (current, recommended) => current < recommended * 0.9;
const tooMuch = (current, recommended) => current > recommended * 1.1;

const eatingRate = (current, recommended) => {
  let rate;
  if (current < recommended * 0.9) rate = 'too little';
  else if (current > recommended * 1.1) rate = 'too much';
  else rate = 'okay';
  return rate;
};

const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${eatingRate(dogSarah.curFood, dogSarah.recFood)}.`
);

// 3. Determine owners of dogs eating too much and those eating too little
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood * 1.1)
  .flatMap((dog) => dog.owners);
console.log('Owners whose dogs eat too much:', ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood * 0.9)
  .flatMap((dog) => dog.owners);
console.log('Owners whose dogs eat too little:', ownersEatTooLittle);

// 4. Log to the console owners whose dogs are eating too much and those with dogs eating too little
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Determine dogs eating exactly as recommended
const eatingExactly = dogs.some((dog) => dog.curFood === dog.recFood);
console.log('Eating exactly:', eatingExactly);

// 6. Check if some dogs are eating okay
const eatingOkay = dogs.some((dog) => okay(dog.curFood, dog.recFood));
console.log('Eating okay:', eatingOkay);

// 7. Determine the dogs eating okay
const dogsEatingOkay = dogs.filter((dog) => okay(dog.curFood, dog.recFood));
console.log('Dogs eating okay:', dogsEatingOkay);

// 8. Sort dog objects based on quantity of recommeneded food
const sortedDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sortedDogs);
