'use strict';

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.bmi = (this.mass / this.height ** 2).toFixed(1);
    return this.bmi;
  },
};
mark.calcBMI();

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.bmi = (this.mass / this.height ** 2).toFixed(1);
    return this.bmi;
  },
};
john.calcBMI();

const markBMI = mark.bmi;
const johnBMI = john.bmi;
console.log(
  `${
    markBMI > johnBMI ? mark.fullName : john.fullName
  }'s BMI (${markBMI}) is higher than ${
    markBMI > johnBMI ? john.fullName : mark.fullName
  }'s (${johnBMI})!`
);
