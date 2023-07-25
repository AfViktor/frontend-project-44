import getRandomInt from '../utils.js';

function getQuestion(number) {
  return `Question: ${number}`;
}

function isEven(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

function runGameEven() {
  let question = '';
  let rightAnswer = '';
  const number = getRandomInt(0, 10);
  rightAnswer = isEven(number);
  question = getQuestion(number);
  return [question, rightAnswer];
}

export default runGameEven;
