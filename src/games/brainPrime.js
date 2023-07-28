import getRandomInt from '../utils.js';

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

function runGamePrime() {
  const number = getRandomInt(1, 100);
  const question = number;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
}

export default runGamePrime;
