import getRandomInt from '../utils.js';

function getQuestion(number) {
  return number;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function runGameEven() {
  const number = getRandomInt(0, 10);
  const question = getQuestion(number);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [question, rightAnswer];
}

export default runGameEven;
