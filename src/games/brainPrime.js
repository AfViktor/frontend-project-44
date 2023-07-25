import getRandomInt from '../utils.js';

function getQuestion(number) {
  return `Question: ${number}`;
}

function isPrime(number) {
  let numberIsPrime = '';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 && number % number === 0) {
      numberIsPrime = 'no';
      return numberIsPrime;
    }
  }
  numberIsPrime = 'yes';
  return numberIsPrime;
}

function runGamePrime() {
  const number = getRandomInt(1, 100);
  let question = '';
  let rightAnswer = '';
  rightAnswer = isPrime(number);
  question = getQuestion(number);
  return [question, rightAnswer];
}

export default runGamePrime;
