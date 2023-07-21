import randomInt from '/Users/vik/study/hexlet/projects/mindgames/frontend-project-44/src/utils.js';

function isEvenSum() {
  const number1 = Math.round(Math.random() * 10);
  const number2 = Math.round(Math.random() * 10);
  const sum = number1 + number2;
  return [number1, number2, sum];
}

function isEvenSubtract() {
  const number1 = Math.round(Math.random() * 10);
  const number2 = Math.round(Math.random() * 10);
  const subrtact = number1 - number2;
  return [number1, number2, subrtact];
}

function isEvenMulti() {
  const number1 = Math.round(Math.random() * 10);
  const number2 = Math.round(Math.random() * 10);
  const multi = number1 * number2;
  return [number1, number2, multi];
}

export {
  isEvenSum, isEvenSubtract, isEvenMulti, randomInt,
};
