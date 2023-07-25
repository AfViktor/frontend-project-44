import getRandomInt from '../utils.js';

function getQuestion(number) {
  return `Question: ${number}`;
}

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
  let question = '';
  let rightAnswer = '';
  rightAnswer = isPrime(number) ? 'yes' : 'no';
  question = getQuestion(number);
  return [question, rightAnswer];
}

export default runGamePrime;
