'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  (dog) => (dog.recommendedFood = (dog.weight ** 0.75 * 28).toFixed(2))
);

// 2.
const eatingRate = (curFood, recommendedFood) => {
  let rate;
  if (curFood < recommendedFood * 0.9) rate = 'too little';
  else if (curFood > recommendedFood * 1.1) rate = 'too much';
  else rate = 'okay';
  return rate;
};

const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${eatingRate(
    dogSarah.curFood,
    dogSarah.recommendedFood
  )}.`
);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap((dog) => dog.owners);
console.log('Owners whose dogs eat too much:', ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap((dog) => dog.owners);
console.log('Owners whose dogs eat too little:', ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
