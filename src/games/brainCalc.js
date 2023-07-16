function isEvenSum () {
  let number1 = Math.round(Math.random() * 10);
  let number2 = Math.round(Math.random() * 10);
  let sum = number1 + number2;
  return [number1, number2, sum];
};

function isEvenSubtract () {
  let number1 = Math.round(Math.random() * 10);
  let number2 = Math.round(Math.random() * 10);
  let subrtact = number1 - number2;
  return [number1, number2, subrtact];
};

function isEvenMulti () {
  let number1 = Math.round(Math.random() * 10);
  let number2 = Math.round(Math.random() * 10);
  let multi = number1 * number2;
  return [number1, number2, multi];
};

function randomInt (min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export { isEvenSum, isEvenSubtract, isEvenMulti, randomInt };