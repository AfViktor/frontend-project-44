import getRandomInt from '../utils.js';

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function runGameEven() {
  const number = getRandomInt(0, 10);
  const question = number;
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [question, rightAnswer];
}

export default runGameEven;
