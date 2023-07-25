import getRandomInt from '../utils.js';

function getQuestion(number) {
  return `Question: ${number}`;
}

function isEven(number) {
  let evenNumber = '';
  if (number % 2 === 0) {
    evenNumber = 'yes';
  } else {
    evenNumber = 'no';
  }
  return evenNumber;
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
