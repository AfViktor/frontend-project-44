import getRandomInt from '../utils.js';

function getQuestion(number1, number2) {
  return `${number1} ${number2}`;
}

function getDivider(a, b) {
  if (b === 0) {
    return a;
  }
  return getDivider(b, a % b);
}

function runGameGcd() {
  const number1 = getRandomInt(1, 10);
  const number2 = getRandomInt(1, 10);
  const question = getQuestion(number1, number2);
  const rightAnswer = String(getDivider(number1, number2));
  return [question, rightAnswer];
}

export default runGameGcd;
