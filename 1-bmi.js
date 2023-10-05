const calcBMI = (mass, height) => (mass / height ** 2).toFixed(2);

const massMark1 = 78;
const massJohn1 = 92;
const heightMark1 = 1.69;
const heightJohn1 = 1.95;

const massMark2 = 95;
const massJohn2 = 85;
const heightMark2 = 1.88;
const heightJohn2 = 1.76;

const bmiMark = calcBMI(massMark1, heightMark1);
const bmiJohn = calcBMI(massJohn1, heightJohn1);
const markHigherBMI = `${
  bmiMark > bmiJohn ? "Mark" : "John"
} has a higher BMI than ${bmiMark > bmiJohn ? "John" : "Mark"}.`;

console.log("Mark's BMI:", bmiMark);
console.log("John's BMI:", bmiJohn);
console.log(markHigherBMI);

const bmiMark2 = calcBMI(massMark2, heightMark2);
const bmiJohn2 = calcBMI(massJohn2, heightJohn2);
const markHigherBMI2 = `${
  bmiMark2 > bmiJohn2 ? "Mark" : "John"
} has a higher BMI than ${bmiMark2 > bmiJohn2 ? "John" : "Mark"}.`;

console.log("Mark's BMI:", bmiMark2);
console.log("John's BMI:", bmiJohn2);
console.log(markHigherBMI2);
