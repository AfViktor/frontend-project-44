import randomInt from '../utils.js';

function isPrime() {
  const number = randomInt(1, 100);
  let question = '';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 && number % number === 0) {
      question = `Question: ${number}`;
      return [question, 'no'];
    }
  }
  question = `Question: ${number}`;
  return [question, 'yes'];
}

export default isPrime;
