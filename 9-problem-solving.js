'use strict';

const printForecast = (arr) => {
  let strOutput = '... ';
  for (let i = 0; i < arr.length; i++) {
    strOutput += `${arr[i]}ºC in ${i + 1} day${i === 0 ? '' : 's'} ... `;
  }
  return strOutput;
};

const temps1 = [17, 21, 23];
console.log(printForecast(temps1));

const temps2 = [12, 5, -5, 0, 4];
console.log(printForecast(temps2));
