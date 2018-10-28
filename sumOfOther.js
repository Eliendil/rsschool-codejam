function sumOfOther(arg) {
  const summa = arg.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return arr.map(currentValue => summa - currentValue);
};
sumOfOther ([2, 3, 4, 1]);
