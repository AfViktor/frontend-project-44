import getRandomInt from '../utils.js';

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function runGameEven() {
  const number = getRandomInt(0, 10);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [number, rightAnswer];
}

export default runGameEven;
