//
const dolphinsWin = 'Dolphins win the trophy!';
const koalasWin = 'Koalas win the trophy!';
const draw = 'Both win the trophy.';
const noWin = 'No team wins the trophy.';

// Data 1
const scoresDolphins1 = [95, 108, 89];
const scoresKoalas1 = [88, 91, 110];

// Average calculator
const calcAvg = scores =>
  Number((scores.reduce((acc, cur) => acc + cur) / scores.length).toFixed(2));

// Result 1
const avgDolphins = calcAvg(scoresDolphins1);
const avgKoalas = calcAvg(scoresKoalas1);
let result1;
if (avgDolphins > avgKoalas) {
  result1 = dolphinsWin;
} else if (avgKoalas > avgDolphins) {
  result1 = koalasWin;
} else {
  result1 = draw;
}
console.log(result1);

// Data 2
const scoresDolphins2 = [97, 112, 101];
const scoresKoalas2 = [109, 95, 123];

// Result 2
const avgDolphins2 = calcAvg(scoresDolphins2);
const avgKoalas2 = calcAvg(scoresKoalas2);
let result2;
if (avgDolphins2 > avgKoalas2 && avgDolphins2 >= 100) {
  result2 = dolphinsWin;
} else if (avgKoalas2 > avgDolphins2 && avgKoalas2 >= 100) {
  result2 = koalasWin;
} else {
  result2 = draw;
}
console.log(result2);

// Data 3
const scoresDolphins3 = [97, 112, 101];
const scoresKoalas3 = [109, 95, 106];

// Result 3
const avgDolphins3 = calcAvg(scoresDolphins3);
const avgKoalas3 = calcAvg(scoresKoalas3);
let result3;
if (avgDolphins3 > avgKoalas3 && avgDolphins3 >= 100) {
  result3 = dolphinsWin;
} else if (avgKoalas3 > avgDolphins3 && avgKoalas3 >= 100) {
  result3 = koalasWin;
} else if (
  avgDolphins3 === avgKoalas3 &&
  avgDolphins3 >= 100 &&
  avgKoalas3 >= 100
) {
  result3 = draw;
} else result3 = noWin;

console.log(result3);
