'use strict';

const calcAverage = scores => {
  return (scores.reduce((acc, cur) => acc + cur) / scores.length).toFixed(0);
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas)
    return `Dolphines win (${avgDolphins} vs. ${avgKoalas}).`;
  else if (avgKoalas >= 2 * avgDolphins)
    return `Koalas win (${avgKoalas} vs. ${avgDolphins}).`;
  else return 'No team wins.';
};

// Data 1
const avgDolphins1 = calcAverage([44, 23, 71]);
const avgKoalas1 = calcAverage([65, 54, 49]);
console.log(checkWinner(avgDolphins1, avgKoalas1));

// Data 2
const avgDolphins2 = calcAverage([85, 54, 41]);
const avgKoalas2 = calcAverage([23, 34, 27]);
console.log(checkWinner(avgDolphins2, avgKoalas2));
