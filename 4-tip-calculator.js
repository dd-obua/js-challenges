const calcTip = bill => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return `The bill was ${bill}, the tip was ${tip}, and the total value ${
    bill + tip
  }.`;
};

console.log(calcTip(275));
