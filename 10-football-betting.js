'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  // prettier-ignore
  players: [
    ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 
    'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',
    ],
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi',
      'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Challenge 1
const [players1, players2] = game.players;
console.log(`${game.team1}:`, players1);
console.log(`${game.team2}:`, players2);
console.log('');

const [gk, ...fieldPlayers] = players1;
console.log('Goal keeper:', gk);
console.log('Field players:', fieldPlayers);
console.log('');

const allPlayers = [...players1, ...players2];
console.log('All players:', allPlayers);
console.log('');

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('Final players of team 1:', players1Final);
console.log('');

// prettier-ignore
const { odds: { team1, x: draw, team2 }} = game;
console.log('Team 1 odd:', team1);
console.log('Draw odd:', draw);
console.log('Team 2 odd:', team2);
console.log('');

const printGoals = (...players) => {
  players.forEach((player) => console.log(player));
  console.log(`${players.length} goals in total.`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
console.log('');

team1 < team2 && console.log(`${game.team1} is more likely to win.`);
team2 < team1 && console.log(`${game.team2} is more likely to win.`);
console.log('');

// Challenge 2
for (const [i, scorer] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${scorer}`);
console.log('');

const oddValues = Object.values(game.odds);
let averageOdd = 0;
for (const value of oddValues) averageOdd += value;
averageOdd /= oddValues.length;
console.log(averageOdd.toFixed(2));
console.log('');

for (const [key, value] of Object.entries(game.odds)) {
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}.`);
}
console.log('');

// Third challenge
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(gameEvents);
const events = [...new Set(gameEvents.values())];
console.log('Events', events);

gameEvents.delete(64);
console.log(gameEvents);
